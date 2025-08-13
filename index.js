require("dotenv").config();
const { SMTPServer } = require("smtp-server");
const { simpleParser } = require("mailparser");
const fs = require("fs");
const path = require("path");

// Config
const MAIL_DIR = process.env.MAIL_DIR || path.join(__dirname, "emails");
const SMTP_PORT = process.env.SMTP_PORT || 25;

// Ensure mail storage directory exists
if (!fs.existsSync(MAIL_DIR)) {
	fs.mkdirSync(MAIL_DIR, { recursive: true });
}

function tooManyConnectionsFrom(ip) {
	// Example: block if >5 connections from same IP in 1 min (implement if needed)
	return false;
}

const server = new SMTPServer({
	allowInsecureAuth: true,
	authOptional: true,
	maxClients: 10,

	onConnect(session, cb) {
		if (tooManyConnectionsFrom(session.remoteAddress)) {
			return cb(new Error("Too many connections from this IP"));
		}
		console.log(`📡 Connection from ${session.remoteAddress}`);
		cb();
	},

	onMailFrom(address, session, cb) {
		console.log(`📧 MAIL FROM: ${address.address}`);
		cb();
	},

	onRcptTo(address, session, cb) {
		console.log(`➡️ RCPT TO: ${address.address}`);
		cb();
	},

	onData(stream, session, cb) {
		const fileName = `${Date.now()}-${session.id}.eml`;
		const filePath = path.join(MAIL_DIR, fileName);

		const fileWriteStream = fs.createWriteStream(filePath);
		stream.pipe(fileWriteStream);

		fileWriteStream.on("error", (err) => {
			console.error(`❌ File write error: ${err}`);
			cb(err);
		});

		// Parse stream without buffering entire message into memory
		simpleParser(stream, {})
			.then((parsed) => {
				console.log("=== 📬 NEW EMAIL ===");
				console.log("From:", parsed.from?.text || "Unknown");
				console.log("To:", parsed.to?.text || "Unknown");
				console.log("Subject:", parsed.subject || "No Subject");
				console.log("Date:", parsed.date || new Date());
				console.log("Message ID:", parsed.messageId || "No ID");

				if (parsed.text)
					console.log("Text Body:", parsed.text.substring(0, 200) + "...");
				if (parsed.html) console.log("HTML Body: [HTML content detected]");

				if (parsed.attachments?.length > 0) {
					console.log(`Attachments: ${parsed.attachments.length}`);
					parsed.attachments.forEach((att, idx) => {
						console.log(`  ${idx + 1}. ${att.filename} (${att.contentType})`);
					});
				}

				console.log(`📂 Saved raw email to ${filePath}`);
				console.log("==================");
				cb();
			})
			.catch((error) => {
				console.error("❌ Error parsing email:", error);
				cb(error);
			});
	},
});

server.listen(SMTP_PORT, () =>
	console.log(`🚀 SMTP Server running at port ${SMTP_PORT}`)
);

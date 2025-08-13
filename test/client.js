require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT || 25,
	secure: false,
	tls: { rejectUnauthorized: false },
	auth: false,
});

const mailOptions = {
	from: "test@localhost",
	to: "recipient@localhost",
	subject: "Test Email",
	text: "Hello from your SMTP server!",
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.error("[CLIENT ERROR]:", error);
	} else {
		console.log("[CLIENT SUCCESS]:", info.response);
	}
});

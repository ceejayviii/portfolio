// import dependancies
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000; // You can choose any port you like

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Define your API routes here

app.post("/send/email", (req, res) => {
  const { name, from, message, html } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: process.env.Brevo_Host, // You can use other email services
    auth: {
      user: process.env.Brevo_Username, // Your email address
      pass: process.env.Brevo_Pass, // Your email password
    },
  });

  // Define email options
  const mailOptions = {
    from, // Sender address
    to: "syavuya08@gmail.com", // List of recipients
    subject: `Email from ${name}`, // Subject line
    text: message, // Plain text body
    html, // HTML body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: "Email sent successfully!", info });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

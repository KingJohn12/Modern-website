const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    console.log("Request received:", req.body);


  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alecjoseph50@gmail.com",         // ✅ your Gmail
      pass: "cerrpxfirufkdunf"                // ✅ your App Password (no spaces!)
    }
  });

  const mailOptions = {
    from: email,
    to: "alecjoseph50@gmail.com",             // ✅ your receiving inbox
    subject: `New message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).send("Failed to send email");
  }
});

// ✅ This must be outside the route!
app.listen(5000, () => console.log("Server running on port 5000"));
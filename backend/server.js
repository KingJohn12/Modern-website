const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Allow your live website to call your backend
app.use(cors({
  origin: ["https://alec-joseph.com", "https://www.alec-joseph.com"]
}));

app.use(express.json());

app.post("/contact", async (req, res) => {
  console.log("Request received:", req.body);

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alecjoseph50@gmail.com",     // your Gmail
      pass: "cerrpxfirufkdunf"            // your App Password
    }
  });

  const mailOptions = {
    from: email,
    to: "alecjoseph50@gmail.com",
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

// ✅ Render requires this — DO NOT use a fixed port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",  // Your email
    pass: "your-email-password",  // Your email password or app password
  },
});

exports.send2FACode = functions.https.onCall((data, context) => {
  const email = data.email;
  const code = Math.floor(1000 + Math.random() * 9000);  // Random 4-digit code

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Your 2FA Verification Code",
    text: `Your 2FA verification code is: ${code}`,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => {
      return { success: true, code }; // Send back the code to verify later
    })
    .catch((error) => {
      return { success: false, message: error.message };
    });
});

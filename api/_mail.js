// Shared helper — sends email via Strato SMTP (smtp.strato.de), the same
// mailbox that already receives gridje@gridje.nl. Requires SMTP_PASSWORD
// as an environment variable (the mailbox password, never in code).
const nodemailer = require('nodemailer');

const FROM_ADDRESS = 'gridje@gridje.nl';

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  const password = process.env.SMTP_PASSWORD;
  if (!password) return null;

  cachedTransporter = nodemailer.createTransport({
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    auth: { user: FROM_ADDRESS, pass: password },
  });
  return cachedTransporter;
}

async function sendMail({ to, subject, text }) {
  const transporter = getTransporter();
  if (!transporter) {
    console.log('SMTP_PASSWORD ontbreekt — e-mail niet verstuurd:', subject);
    return;
  }
  await transporter.sendMail({ from: `Gridje Design <${FROM_ADDRESS}>`, to, subject, text });
}

module.exports = { sendMail, FROM_ADDRESS };

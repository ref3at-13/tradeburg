// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, phone, message } = req.body;

  // 1) Configure transporter with your Vercel env vars
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 2) Prepare mail options
  const mailOptions = {
    from: `"Tradeburg Site" <${process.env.SMTP_USER}>`,
    to: 'info@tradeburg.de',
    subject: `🔔 New contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      '',
      `Message:`,
      message
    ].join('\n'),
  };

  // 3) Send email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Mail send error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

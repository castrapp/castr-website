const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',  // SMTP server provided by ForwardEmail
  port: 465,                      // Port 465 for SSL/TLS
  secure: true,                   // Use SSL/TLS
  auth: {
    user: 'support@castr.app',     // Use the alias you created as the user
    pass: process.env.FORWARD_EMAIL_PASS,  // Use the generated password from ForwardEmail
  }
});

export async function POST(request) {
  try {
    const { email, message } = await request.json();

    const mailOptions = {
      from: 'support@castr.app',         // The "From" header must match your alias
      to: 'support@castr.app',           // Your receiving email address
      replyTo: email,                    // Use the sender's email for the "Reply-To" header
      subject: 'New message from contact form',
      text: message,                     // The message content
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

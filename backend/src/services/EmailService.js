import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.exemplo.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendWelcomeEmail = async (recipientEmail) => {
  const mailOptions = {
    from: `"Orbit Page" <${process.env.SMTP_USER}>`, // Remetente
    to: recipientEmail, // Destinatário
    subject: 'Bem-vindo à Newsletter Orbit Page!',
    html: `
        <h1>Obrigado por se inscrever!</h1>
        <p>Você agora receberá as últimas novidades da Orbit.</p>
        <p>Atenciosamente, Equipe Orbit.</p>
    `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(`E-mail de boas-vindas enviado para ${recipientEmail}. ID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return false;
  }
};

export default {
  sendWelcomeEmail,
};

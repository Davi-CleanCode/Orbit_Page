/**
 * SERVICE: Envio de Emails
 * -------------------------------------
 * Responsável por toda lógica de envio de emails.
 * Chamado pelo newsletterController ou outros serviços.
 * pode alterar templates, provedores e configurações.
 */

import nodemailer from 'nodemailer';

class EmailService {
  constructor() {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      this.transporter = {
        sendMail: async (mailOptions) => {
          console.log('--- email mock ---');
          console.log(mailOptions);
          console.log('--- end mock ---');
        },
      };
    }
  }

  async sendWelcomeEmail(subscriber) {
    const mailOptions = {
      from: process.env.SMTP_FROM || '"Orbit Page" <noreply@orbitpage.com>',
      to: subscriber.email,
      subject: 'Bem-vindo à Orbit Page! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Bem-vindo à nossa comunidade!</h2>
          <p>Olá <strong>${subscriber.name}</strong>,</p>
          <p>Obrigado por se inscrever na Orbit Page. Você agora receberá nossas atualizações e novidades.</p>
          <p>Fique ligado para conteúdos incríveis! 🎉</p>
          <hr>
          <p style="color: #6b7280; font-size: 12px;">
            Caso queira cancelar sua inscrição, <a href="${process.env.APP_URL}/unsubscribe?email=${subscriber.email}">clique aqui</a>.
          </p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('✅ Email de boas-vindas enviado para:', subscriber.email);
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
    }
  }

  async sendNotification(formData) {
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'Nova mensagem do formulário - Orbit Page',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h3>Nova mensagem recebida:</h3>
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Mensagem:</strong> ${formData.message}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('✅ Notificação enviada para admin');
    } catch (error) {
      console.error('❌ Erro ao enviar notificação:', error);
    }
  }
}

export default new EmailService();

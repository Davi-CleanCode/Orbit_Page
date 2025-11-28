/**
 * CONTROLLER: Newsletter
 * -------------------------------------
 * Gerencia assinaturas, remoções e consultas relacionadas à newsletter.
 * Faz a ponte entre rotas e o NewsletterService.
 * voce pode ajustar regras, validações e retornos.
 */

import { SubscriberModel } from '../models/SubscriberModel.js';
import EmailService from '../services/EmailService.js';

class NewsletterController {
  async subscribe(req, res) {
    try {
      const { email, name } = req.body;

      if (!email || !email.includes('@')) {
        return res.status(400).json({
          success: false,
          message: 'Email inválido'
        });
      }

      const existingSubscriber = await SubscriberModel.findByEmail(email);
      if (existingSubscriber) {
        return res.status(409).json({
          success: false,
          message: 'Este email já está inscrito'
        });
      }

      const subscriber = await SubscriberModel.create({ email, name });
      EmailService.sendWelcomeEmail(subscriber);

      res.status(201).json({
        success: true,
        message: 'Inscrição realizada com sucesso!',
        data: subscriber
      });

    } catch (error) {
      console.error('❌ Erro no subscribe:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }

  async unsubscribe(req, res) {
    try {
      const { email } = req.body;

      const subscriber = await SubscriberModel.unsubscribe(email);

      if (!subscriber) {
        return res.status(404).json({
          success: false,
          message: 'Email não encontrado'
        });
      }

      res.json({
        success: true,
        message: 'Inscrição cancelada com sucesso'
      });

    } catch (error) {
      console.error('❌ Erro no unsubscribe:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }

  async getSubscribers(req, res) {
    try {
      const subscribers = await SubscriberModel.findAll();
      res.json({
        success: true,
        data: subscribers
      });
    } catch (error) {
      console.error('❌ Erro ao buscar subscribers:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  }
}

export default new NewsletterController();

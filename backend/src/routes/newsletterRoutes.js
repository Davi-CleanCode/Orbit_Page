/**
 * ROTAS: Newsletter
 * -------------------------------------
 * Contém todas as rotas relacionadas à newsletter.
 * Cada rota chama um controller correspondente.
 * vcoe pode adicionar novas rotas se surgirem novas funções.
 */

import express from 'express';
import newsletterController from '../controllers/newsletterController.js';

const router = express.Router();

router.post('/subscribe', newsletterController.subscribe);
router.post('/unsubscribe', newsletterController.unsubscribe);
router.get('/subscribers', newsletterController.getSubscribers);

export default router;
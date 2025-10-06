import express from 'express';
import newsletterController from '../controllers/newsletterController.js';

const router = express.Router();

router.post('/subscribe', newsletterController.subscribe);
router.post('/unsubscribe', newsletterController.unsubscribe);
router.get('/subscribers', newsletterController.getSubscribers);

export default router;
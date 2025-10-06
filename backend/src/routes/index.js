import express from 'express';
import formController from '../controllers/formController.js';
import newsletterRoutes from './newsletterRoutes.js';

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Orbit Page Backend está rodando!',
    timestamp: new Date().toISOString()
  });
});

router.post('/form/submit', formController.submit);
router.get('/form/submissions', formController.getSubmissions);
router.use('/newsletter', newsletterRoutes);

export default router;

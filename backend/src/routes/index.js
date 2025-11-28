/**
 * ROTAS PRINCIPAIS
 * -------------------------------------
 * Arquivo que agrupa e exporta todas as rotas do backend.
 * Útil para organizar a estrutura geral das rotas.
 * voce pode incluir novas rotas aqui.
 */

import express from 'express';
import formController from '../controllers/formController.js';
import newsletterRoutes from './newsletterRoutes.js';
import { graphqlHTTP } from 'express-graphql';
import { schema, root } from '../graphql/schema.js';

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

router.post('/form', formController.submit);
router.get('/form', formController.getSubmissions);
router.use('/newsletter', newsletterRoutes);

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

export default router;

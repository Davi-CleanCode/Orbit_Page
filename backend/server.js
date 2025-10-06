import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend funcionando!',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/newsletter/subscribe', (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email é obrigatório' });
  }

  console.log('Novo inscrito:', { email, name });

  res.json({
    success: true,
    message: 'Inscrito com sucesso!',
    data: { email, name }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
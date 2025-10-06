import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'orbit_db',
  password: process.env.DB_PASSWORD || '2732',
  port: process.env.DB_PORT || 2732,
});

pool
  .connect()
  .then(() => console.log('✅ Conectado ao PostgreSQL'))
  .catch((err) => console.error('❌ Erro ao conectar ao PostgreSQL:', err));

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

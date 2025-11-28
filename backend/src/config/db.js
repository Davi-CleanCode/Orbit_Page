/**
 * CONFIGURAÇÃO DO BANCO DE DADOS
 * -------------------------------------
 * Este arquivo cria e exporta a conexão com o banco.
 * Toda a aplicação utiliza esta conexão.
 * Julia só deve alterar caso mudemos o banco,
 * credenciais ou estrutura de conexão.
 */

import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 2732,
});

pool.on('connect', () => console.log('🟢 Conectado ao PostgreSQL'));
pool.on('error', (err) => console.error('Erro no pool do Postgres:', err));
import { pool } from '../config/db.js';

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`;

  try {
    await pool.query(query);
    console.log("Tabela 'subscribers' verificada/criada com sucesso.");
  } catch (error) {
    console.error("Erro ao criar a tabela 'subscribers':", error);
    throw error;
  }
};

const addSubscriber = async (email) => {
  const query = 'INSERT INTO subscribers (email) VALUES ($1) RETURNING *';
  const values = [email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    if (error.code === '23505') {
      throw new Error('Este e-mail já está inscrito.');
    }
    throw error;
  }
};

const getAllSubscribers = async () => {
  const query = 'SELECT * FROM subscribers ORDER BY subscribed_at DESC';
  const result = await pool.query(query);
  return result.rows;
};

export default {
  createTable,
  addSubscriber,
  getAllSubscribers,
};

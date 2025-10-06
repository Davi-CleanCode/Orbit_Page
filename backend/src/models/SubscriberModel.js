import { pool } from '../config/db.js';

export class SubscriberModel {
  static async create(subscriberData) {
    const { email, name } = subscriberData;
    const query = `
      INSERT INTO subscribers (email, name) 
      VALUES ($1, $2) 
      RETURNING *
    `;
    const values = [email, name];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM subscribers WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async findAll() {
    const query = 'SELECT * FROM subscribers WHERE is_active = true ORDER BY subscribed_at DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async unsubscribe(email) {
    const query = 'UPDATE subscribers SET is_active = false WHERE email = $1 RETURNING *';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }
}
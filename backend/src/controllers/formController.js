/**
 * CONTROLLER: Formulário
 * -------------------------------------
 * Controla o fluxo de dados enviados pelos formulários da aplicação.
 * Recebe as requisições, valida informações e chama os services.
 * voce pode alterar validações ou regras de negócio.
 */

import { pool } from '../config/db.js';
import EmailService from '../services/EmailService.js';

class FormController {
    async submit(req, res) {
        try {
            const { name, email, message } = req.body;

            if (!name || !email || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Todos os campos são obrigatórios'
                });
            }

            const query = `
        INSERT INTO form_submissions (name, email, message) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
            const values = [name, email, message];

            const result = await pool.query(query, values);
            const submission = result.rows[0];

            EmailService.sendNotification({ name, email, message });

            res.status(201).json({
                success: true,
                message: 'Mensagem enviada com sucesso!',
                data: submission
            });

        } catch (error) {
            console.error('❌ Erro no form submit:', error);
            res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }

    async getSubmissions(req, res) {
        try {
            const query = 'SELECT * FROM form_submissions ORDER BY submitted_at DESC';
            const result = await pool.query(query);

            res.json({
                success: true,
                data: result.rows
            });
        } catch (error) {
            console.error('❌ Erro ao buscar submissions:', error);
            res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }
}

export default new FormController();
import express from "express";
import { pool } from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({ message: "API rodando com sucesso!", db_time: result.rows[0].now });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao conectar ao banco" });
    }
});

export default router;

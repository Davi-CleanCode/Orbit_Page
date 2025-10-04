import express from "express";
import cors from "cors";
import newsletterRouter from "./routes/newsletterRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Servidor Orbit Page está rodando 🚀"));
app.use("/api/newsletter", newsletterRouter);

export default app;

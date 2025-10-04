import SubscriberModel from "../models/SubscriberModel.js";
import EmailService from "../services/EmailService.js";

const subscribe = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "O campo 'email' é obrigatório." });
    }

    try {
        const newSubscriber = await SubscriberModel.addSubscriber(email);

        EmailService.sendWelcomeEmail(email);

        return res.status(201).json({
            message: "Inscrição realizada com sucesso!",
            subscriber: newSubscriber
        });
    } catch (error) {
        if (error.message.includes("já está inscrito")) {
            return res.status(409).json({ error: error.message });
        }
        console.error("Erro no processo de inscrição:", error);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
};

export default {
    subscribe,
};

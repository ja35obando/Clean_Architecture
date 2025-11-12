import Fastify from "fastify";
import { OrderController } from "./OrderController.js";

export async function buildServer() {
    const app = Fastify();
    const controller = new OrderController();
    app.post("/orders", (req, res) => controller.createOrder(req, res));
    app.delete("/orders/:id", (req, res) => controller.deleteOrder(req, res));
    return app;
}
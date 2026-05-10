import type { FastifyInstance } from "fastify";
import { OrderController } from "./OrderController.js";

export async function registerOrderRoutes(app: FastifyInstance) {
    const controller = new OrderController();

    app.get("/", (req, res) => controller.listOrders(req, res));
    app.post("/", (req, res) => controller.createOrder(req, res));
    app.delete("/:id", (req, res) => controller.deleteOrder(req, res));
}

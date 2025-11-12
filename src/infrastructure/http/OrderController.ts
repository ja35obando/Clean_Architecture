import type { FastifyRequest, FastifyReply } from "fastify";
import { createOrderUseCase } from "../../composition/container.js";

export class OrderController {
    async createOrder(req: FastifyRequest, res: FastifyReply) {
        const { orderId, customerId } = (req.body ?? {}) as any;
        const out = await createOrderUseCase.execute({ orderId, customerId });
        res.code(201).send(out);
    }

    async deleteOrder(req: FastifyRequest, res: FastifyReply) {
        const { id } = req.params as any;
        if (!id) {
            res.code(400).send({ error: "id is required" });
            return;
        }
        // TODO: implement deletion via use-case/repository
        res.code(204).send();
    }
}
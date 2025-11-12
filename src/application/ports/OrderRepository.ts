import { Order } from "../../domain/entities/Order.js";

export interface OrderRepository {
    save(order: Order): Promise<void>;
    findById(id: string): Promise<Order | null>;
}
import { InMemoryOrderRepository } from "@infrastructure/persistence/InMemoryOrderRepository.js";
import { CreateOrderUseCase } from "@application/use-cases/CreateOrderUseCase.js";
export const orderRepository = new InMemoryOrderRepository();
export const createOrderUseCase = new CreateOrderUseCase(orderRepository);

import { InMemoryOrderRepository } from "@infrastructure/persistence/InMemoryOrderRepository.js";
import { CreateOrderUseCase } from "@application/use-cases/CreateOrderUseCase.js";

const repo = new InMemoryOrderRepository();
export const createOrderUseCase = new CreateOrderUseCase(repo);
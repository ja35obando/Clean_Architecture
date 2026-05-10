import { describe, it, expect, vi } from "vitest";
import { CreateOrderUseCase } from "../../src/application/use-cases/CreateOrderUseCase.js";
import type { OrderRepository } from "../../src/application/ports/OrderRepository.js";

describe("CreateOrderUseCase", () => {
    it("should create an order and save it in the repository", async () => {
        const mockRepo: OrderRepository = {
            save: vi.fn().mockResolvedValue(undefined),
            findById: vi.fn().mockResolvedValue(null),
            findAll: vi.fn().mockResolvedValue([]),
        };

        const useCase = new CreateOrderUseCase(mockRepo);
        const result = await useCase.execute({
            orderId: "order-1",
            customerId: "customer-1",
        });

        expect(result).toEqual({ orderId: "order-1" });
        expect(mockRepo.save).toHaveBeenCalledTimes(1);
        expect(mockRepo.findById).toHaveBeenCalledWith("order-1");
    });

    it("should throw when order already exists", async () => {
        const existingOrder = { id: "order-1", customerId: "customer-1" } as any;
        const mockRepo: OrderRepository = {
            save: vi.fn().mockResolvedValue(undefined),
            findById: vi.fn().mockResolvedValue(existingOrder),
            findAll: vi.fn().mockResolvedValue([]),
        };

        const useCase = new CreateOrderUseCase(mockRepo);

        await expect(
            useCase.execute({ orderId: "order-1", customerId: "customer-1" }),
        ).rejects.toThrow("Order already exists");

        expect(mockRepo.save).not.toHaveBeenCalled();
    });
});

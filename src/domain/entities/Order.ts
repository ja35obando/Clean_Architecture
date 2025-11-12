import { Price } from "../values-objects/Price.js";

export class Order {
    readonly id: string;
    readonly customerId: string;
    private items: Map<string, Price> = new Map();

    constructor(id: string, customerId: string) {
        if (!id || !customerId) {
            throw new Error("Order id and customerId are required");
        }
        this.id = id;
        this.customerId = customerId;
    }

    addItem(itemId: string, price: Price): void {
        this.items.set(itemId, price);
    }

    removeItem(itemId: string): void {
        this.items.delete(itemId);
    }

    getItems(): Map<string, Price> {
        return new Map(this.items);
    }
}

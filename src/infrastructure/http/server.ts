import Fastify from "fastify";
import { healthCheck } from "../../shared/health.js";
import { registerOrderRoutes } from "./OrderRoutes.js";

export async function buildServer() {
    const app = Fastify({ logger: true });

    app.get("/", async () => getApiInfo());
    app.get("/health", async () => healthCheck());

    await app.register(registerOrderRoutes, { prefix: "/orders" });
    return app;
}
function getApiInfo() {
    return {
        service: "clean-architecture-ts",
        version: "1.0.0",
        architecture: "Clean Architecture",
        description: "API de gestión de órdenes con separación de capas.",
        endpoints: {
            health: "/health",
            orders: "/orders [GET, POST, DELETE]",
        },
    };
}

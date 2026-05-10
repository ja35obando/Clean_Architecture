type NodeEnv = "development" | "test" | "production";

function parsePort(rawPort: string | undefined): number {
    if (!rawPort) return 3000;
    const parsedPort = Number(rawPort);
    if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
        throw new Error("PORT must be a positive integer");
    }
    return parsedPort;
}

function parseNodeEnv(rawNodeEnv: string | undefined): NodeEnv {
    const nodeEnv = rawNodeEnv ?? "development";
    if (nodeEnv !== "development" && nodeEnv !== "test" && nodeEnv !== "production") {
        throw new Error("NODE_ENV must be one of: development, test, production");
    }
    return nodeEnv;
}

export const config = {
    port: parsePort(process.env.PORT),
    nodeEnv: parseNodeEnv(process.env.NODE_ENV),
};

import { buildServer } from "@infrastructure/http/server.js";

const port = Number(process.env.PORT) || 3000;
buildServer().then((app) => app.listen({ port }))
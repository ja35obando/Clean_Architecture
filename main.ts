import { buildServer } from "@infrastructure/http/server.js";
import { config } from "./src/config/env.js";

buildServer().then((app) => {
  app.listen({ port: config.port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`🚀 Servidor Clean Architecture listo en: ${address}`);
  });
});

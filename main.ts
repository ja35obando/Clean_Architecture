import { healthCheck } from "./src/shared/health.js";

const health = healthCheck();

console.log(`Status: ${health.ok}, Timestamp: ${health.timestamp}, Uptime: ${health.uptime}s`);
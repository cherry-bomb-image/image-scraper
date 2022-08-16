import { express } from "express";
import { healthcheck } from "./healthcheck";

const router = express.router();
router.get("/v1/healthcheck", healthcheck);

export { router };
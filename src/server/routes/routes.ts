import * as express from "express";
import { healthcheck } from "./healthcheck";

const router = express.Router();
router.get("/v1/healthcheck", healthcheck);

export { router };
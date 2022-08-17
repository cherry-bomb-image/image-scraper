import express from "express";
import { router } from "./routes/routes";
import { scrape } from "../packages/scraper/scraper";

const app : express.Application = express();
const port : number = 3001;

app.use("/", router);

scrape();

app.listen(port, () => {
  console.log(`Starting http server at http://localhost:${port}`);
});
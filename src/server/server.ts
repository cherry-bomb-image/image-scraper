import express from "express";
import { router } from "./routes/routes";
import { scrape } from "../packages/scraper/scraper";

const initialize_server = async function() {
  const app : express.Application = express();
  const port : number = 3001;

  app.use("/", router);

  const images : Object[] = await scrape("model photoshoot");
  console.log(images);

  app.listen(port, () => {
    console.log(`Starting http server at http://localhost:${port}`);
  });
}();
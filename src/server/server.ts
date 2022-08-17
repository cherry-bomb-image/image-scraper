import express from "express";
import { router } from "./routes/routes";
import { scrape, Image } from "../packages/scraper/scraper";
import { download_images } from "../packages/downloader/downloader";

const initialize_server = async function() {
  const app : express.Application = express();
  const port : number = 3001;

  app.use("/", router);

  const images : Image[] = await scrape("model photoshoot");
  download_images(images);

  app.listen(port, () => {
    console.log(`Starting http server at http://localhost:${port}`);
  });
};

initialize_server();
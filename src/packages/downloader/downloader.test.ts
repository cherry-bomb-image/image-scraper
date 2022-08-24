import { download_images } from "./downloader";
import fs from "fs";

test("Downloader adds image directory to project", () => {
  const dir = "./images";
  download_images([]);

  expect(fs.existsSync(dir)).toBeTruthy();
});
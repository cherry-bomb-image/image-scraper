import { Image } from "../scraper/scraper";
import fs from "fs";
import download from "image-downloader";

const download_images = function(images : Image[]) : void {
  create_image_directory();
  images.forEach(download_image);
}

const create_image_directory = function() : void {
  const dir : string = "./images";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

const download_image = async function(image : Image) : Promise<void> {
  if (!is_http(image.image)) {
    return;
  }

  const timestamp = Date.now();
  const dest = "../../images/" + timestamp + ".jpg";

  const options = {
    url: image.image,
    dest: dest,
  };

  await download.image(options);
}

const is_http = function(image_src : string) : boolean {
  return (image_src.indexOf("http://") == 0 || image_src.indexOf("https://") == 0);
}

export { download_images }
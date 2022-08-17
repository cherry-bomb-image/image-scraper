import cheerio from "cheerio";
import puppeteer from "puppeteer";

const scrape = function() {
  const headers : object = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
  }

  const params : object = {
    "q": "model photoshoot",
    "tbm": "isch",
    "hl": "en",
    "gl": "us",
    "ijn": 1
  }

  const url : string = "http://google.com/search?q=model+photoshoot";

  const options : object = {
    url,
    params,
    headers
  }

  
}

const handle_request = async function(error, response, html) {
  if (error) {
    throw new Error("Error getting html: " + error);
  }

  const $ = cheerio.load(html);
  const images = await get_images($);
  console.log(images);
}

const get_images = function($ : cheerio.Root) : Object[] {
  const images_results : Object[] = [];
  
  $(".MSM1fd").each((i : number, el : cheerio.Element) => {
    images_results.push({
      image: $(el).find("img").attr("src") ? $(el).find("img").attr("src") : $(el).find("img").attr("data-src"),
      title: $(el).find("h3").text(),
      source: $(el).find("a.VFACy .fxgdke").text(),
      link: $(el).find("a.VFACy").attr("href")
    });
  });

  return images_results;
}

export { scrape }
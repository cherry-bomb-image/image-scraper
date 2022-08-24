import cheerio from "cheerio";
import axios, { AxiosResponse } from "axios";

interface Image {
  image: string,
  title: string,
  source: string,
  link: string
};

const scrape = async function(search : string) : Promise<Image[]> {
  const headers : object = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
  }

  const params : object = {
    "q": search,
    "tbm": "isch",
    "hl": "en",
    "gl": "us",
  }

  const url : string = "https://google.com/search";

  const config : object = {
    url: url,
    params,
    headers,
    method: "get"
  }

  const response : AxiosResponse = await axios(config);
  const $ : cheerio.Root = cheerio.load(response.data);

  return get_images($);

}

const get_images = function($ : cheerio.Root) : Image[] {
  const images_results : Image[] = [];
  
  $(".MSM1fd").each((i : number, el : cheerio.Element) => {
    images_results.push(get_image($, el));
  });

  return images_results;
}

const get_image = function($ : cheerio.Root, el : cheerio.Element) : Image {
  return {
    image: $(el).find("img").attr("src") ? $(el).find("img").attr("src") : $(el).find("img").attr("data-src"),
    title: $(el).find("h3").text(),
    source: $(el).find("a.VFACy .fxgdke").text(),
    link: $(el).find("a.VFACy").attr("href")
  };
}

export { scrape, Image }
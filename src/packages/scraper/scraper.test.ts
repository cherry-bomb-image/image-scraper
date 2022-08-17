import { scrape } from "./scraper";

test("Scrape model photoshoot google image search", async () => {
  const data : Object[] = await scrape("model photoshoot");
  expect(data).not.toBeUndefined();
});

test("Scrape non-existent google image search", async () => {
  const data : Object[] = await scrape("");
  expect(data).toEqual([]);
})
import { readdir } from "fs/promises";
import path from "path";

export async function listProducts() {
  try {
    const newsDir = path.join(process.cwd(), "app", "products");
    const files = (await readdir(newsDir)).filter((e) => !e.includes("."));
    return files;
  } catch {
    return [];
  }
}

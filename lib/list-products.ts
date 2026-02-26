import { readdir } from "fs/promises";
import path from "path";

export async function listProducts() {
  try {
    const productsDirectory = path.join(process.cwd(), "app", "products");
    const files = (await readdir(productsDirectory)).filter(
      (e) => !e.includes("."),
    );
    return files;
  } catch {
    return [];
  }
}

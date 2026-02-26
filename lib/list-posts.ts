import { readdir } from "fs/promises";
import path from "path";

export async function listPosts() {
  try {
    const newsDirectory = path.join(process.cwd(), "app", "news");
    const files = (await readdir(newsDirectory)).filter(
      (e) => !e.includes("."),
    );
    return files;
  } catch {
    return [];
  }
}

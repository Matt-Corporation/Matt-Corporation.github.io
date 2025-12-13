import { Typography } from "@/components/ui/typography";
import { listProducts } from "@/lib/list-products";
import Link from "next/link";

export default async function News() {
  const posts = await listProducts();

  return (
    <main className=" prose prose-stone dark:prose-invert max-w-full">
      <Typography variant="h1">Products</Typography>
      <ul>
        {posts.map((e) => (
          <li key={e}>
            <Link
              className="active:opacity-50 font-medium underline underline-offset-4"
              href={`/products/${e}`}
              draggable={false}
            >
              {e}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

import { CORP_NAME } from "@/lib/brand";
import { listPosts } from "@/lib/list-posts";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default async function News() {
  const posts = await listPosts();

  return (
    <main className=" prose prose-stone dark:prose-invert max-w-full">
      <Typography variant="h1">News</Typography>
      <Typography>
        Get news and updates from <span translate="no">{CORP_NAME}</span>
      </Typography>
      <Typography variant="h2">All Posts</Typography>
      <ul>
        {posts.map((e) => (
          <li key={e}>
            <Link
              className="active:opacity-50 font-medium underline underline-offset-4"
              href={`/news/${e}`}
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

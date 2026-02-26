import { CORP_NAME } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2 py-4 prose prose-stone dark:prose-invert max-w-full">
      <Typography variant="h1">{CORP_NAME}</Typography>
      <Typography>
        Welcome to the homepage of the official {CORP_NAME} website!
      </Typography>
      <Button asChild>
        <Link href="/news/nothing" draggable={false}>
          Learn More
        </Link>
      </Button>
    </main>
  );
}

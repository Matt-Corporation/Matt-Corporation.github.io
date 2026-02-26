import { Logo } from "./logo";
import { Button } from "./ui/button";
import { CORP_NAME } from "@/lib/brand";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-xl border-b dark:border-zinc-800 border-zinc-200 h-14 w-full flex items-center p-2 gap-x-2">
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="icon" asChild>
          <Link draggable={false} href="/" aria-label="Go home">
            <Logo />
          </Link>
        </Button>
      </div>
      <Separator orientation="vertical" className="mx-2" />
      <nav className="flex items-center gap-0.5">
        <Button variant="ghost" size="sm" asChild>
          <Link draggable={false} href="/news">
            News
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link draggable={false} href="/products">
            Products
          </Link>
        </Button>
      </nav>
      <div className="flex items-center w-full justify-end-safe">
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

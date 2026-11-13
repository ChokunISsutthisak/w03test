import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="font-extrabold text-xl tracking-tighter">
          Course<span className="text-zinc-500">Profile.</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/">
            <Button variant="ghost" className="font-semibold">Home</Button>
          </Link>
          <Link href="/bio">
            <Button variant="ghost" className="font-semibold">Bio</Button>
          </Link>
          <Link href="/assignment">
            <Button variant="ghost" className="font-semibold">Assignment</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold">
          AI Interview Coach 🚀
        </Link>

        <Button>Login</Button>
      </div>
    </header>
  );
}

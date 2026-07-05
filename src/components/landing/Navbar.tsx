import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          AI Interview Coach 🚀
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">Login</Button>

          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}

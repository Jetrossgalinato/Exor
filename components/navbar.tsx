import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-foreground/20 bg-background/80 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center">
          <div className="size-9 overflow-hidden rounded-full shadow-sm hover:shadow-lg transition-all">
            <Image
              src="/logo.png"
              alt="Exor logo"
              width={90}
              height={90}
              className="h-full w-full object-cover object-center scale-110 dark:brightness-80 hover:brightness-95 dark:hover:brightness-70 transition-all"
            />
          </div>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-12">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mode toggle */}
        <ModeToggle />
      </nav>
    </header>
  );
}

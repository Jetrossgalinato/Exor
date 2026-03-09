"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { TypographyNav } from "@/components/typography";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-foreground/20 bg-background/80 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-row items-center gap-2.5 justify-self-start"
        >
          <div className="size-9 overflow-hidden rounded-full shadow-sm hover:shadow-lg transition-all">
            <Image
              src="/logo.png"
              alt="Exor logo"
              width={90}
              height={90}
              className="h-full w-full object-cover object-center scale-110 dark:brightness-80 hover:brightness-95 dark:hover:brightness-70 transition-all"
            />
          </div>
          <span className="text-lg font-semibold tracking-widest">
            E<span className="text-accent">X</span>OR
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center justify-center gap-12 justify-self-center">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-foreground after:transition-all after:duration-300 ${
                  pathname === href
                    ? "text-foreground after:w-full"
                    : "text-foreground/80 hover:text-foreground after:w-0 hover:after:w-full"
                }`}
              >
                <TypographyNav>{label}</TypographyNav>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mode toggle */}
        <div className="justify-self-end">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

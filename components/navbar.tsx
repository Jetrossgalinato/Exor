"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { TypographyNav } from "@/components/typography";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute("id") || "";
        }
      });

      if (window.scrollY < 100) {
        current = "home";
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];
      setActiveSection(targetId);
      setMobileOpen(false);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({}, "", href);
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-foreground/20 bg-background/80 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-3">
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

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center justify-center gap-12 justify-self-center">
          {navLinks.map(({ label, href }) => {
            const isHash = href.includes("#");
            const targetId = isHash ? href.split("#")[1] : "";
            const isActive = isHash
              ? activeSection === targetId
              : pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => handleScrollTo(e, href)}
                  className={`relative transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-foreground after:transition-all after:duration-300 ${
                    isActive
                      ? "text-foreground after:w-full"
                      : "text-foreground/80 hover:text-foreground after:w-0 hover:after:w-full"
                  }`}
                >
                  <TypographyNav>{label}</TypographyNav>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: mode toggle + hamburger */}
        <div className="flex items-center gap-2 justify-self-end">
          <ModeToggle />
          <button
            className="md:hidden p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-sm px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => {
              const isHash = href.includes("#");
              const targetId = isHash ? href.split("#")[1] : "";
              const isActive = isHash
                ? activeSection === targetId
                : pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={(e) => handleScrollTo(e, href)}
                    className={`block transition-colors ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <TypographyNav>{label}</TypographyNav>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

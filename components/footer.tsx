"use client";

import Link from "next/link";
import { useCallback } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
      if (href.includes("#")) {
        e.preventDefault();
        const targetId = href.split("#")[1];
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", href);
        }
      }
    },
    [],
  );

  return (
    <footer className="w-full relative overflow-hidden border-t border-border/50 bg-muted/40">
      {/* Depth layer — subtle inset top shadow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10 flex flex-col gap-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/#home" className="flex items-center gap-2 w-fit group">
              <span className="font-bold text-lg tracking-tight">
                Exor - Tech Innovations
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Transforming {"today's"} challenges into innovations — building
              practical software solutions that empower businesses and
              communities.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:border-border/80 transition-all duration-200 text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={(e) => handleScrollTo(e, href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Contact
            </span>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>
                  Hiraya Bldg. CSU Main Campus Ampayon, Butuan City, 8600
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a
                  href="mailto:hello@exor.dev"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  exortech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a
                  href="tel:+639000000000"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  0970-587-2979
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          {/* Inset-style top divider line for depth */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Exor. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-primary font-medium">Next.js</span>{" "}
            &amp; <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Twitter, type LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

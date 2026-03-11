"use client";

import Image from "next/image";
import {
  TypographyH1,
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className="flex flex-col items-center text-center px-4 pt-36 pb-6 gap-10 md:px-6 md:pt-60 md:pb-8 md:gap-16 max-w-7xl w-full mx-auto"
    >
      {/* Hero text */}
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <TypographyH1>
          <span className="text-foreground">
            Transforming {"today's"} challenges
          </span>
          <br />
          <span className="text-foreground">into </span>
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--chart-4)] bg-clip-text text-transparent">
            innovations
          </span>
        </TypographyH1>

        <TypographyP>
          Discover practical technological solutions designed to solve the
          real-world problems we face every day.
        </TypographyP>

        <div className="flex flex-wrap justify-center items-center gap-2 mt-2 md:gap-3">
          <Button
            size="sm"
            className="md:text-base md:h-11 md:px-8"
            onClick={() => scrollTo("services")}
          >
            Explore Our Services
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="gap-2 md:text-base md:h-11 md:px-8"
            onClick={() => scrollTo("about")}
          >
            <ArrowRight className="size-4" />
            About us
          </Button>
        </div>
      </div>

      {/* Hero image card */}
      <div className="w-full rounded-3xl overflow-hidden border border-border/30 shadow-md ring-1 ring-white/5">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/images/header1.jpg"
            alt="Header"
            fill
            className="object-cover object-center dark:brightness-80 transition duration-300"
            priority
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-2.5 md:gap-5 text-left">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card-near shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.06)]">
          <div className="px-3.5 py-3 md:px-8 md:py-5">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Vision
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 px-3.5 py-3 md:px-8 md:py-6 bg-card shadow-[inset_0_2px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.08)]">
            <TypographyH3>
              To become a symbol of Filipino technological ingenuity.
            </TypographyH3>
            <div className="hidden sm:block">
              <TypographyMuted>
                By solving real-world challenges through software solutions in
                order to empower our community to chart its own path to
                prosperity.
              </TypographyMuted>
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card-near shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.06)]">
          <div className="px-3.5 py-3 md:px-8 md:py-5">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Mission
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 px-3.5 py-3 md:px-8 md:py-6 bg-card shadow-[inset_0_2px_6px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.08)]">
            <TypographyH3>
              To develop innovative technology solutions that empower
              communities.
            </TypographyH3>
            <div className="hidden sm:block">
              <TypographyMuted>
                We provide practical solutions to real-world challenges, working
                toward a more sustainable and inclusive future for all.
              </TypographyMuted>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

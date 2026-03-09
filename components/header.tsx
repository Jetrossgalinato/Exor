import {
  TypographyH1,
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-60 pb-40 gap-20 max-w-7xl w-full mx-auto">
      {/* Hero text */}
      <div className="flex flex-col items-center gap-6">
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

        <div className="flex items-center gap-3 mt-2">
          <Button size="lg">Try now</Button>
          <Button size="lg" variant="ghost" className="gap-2">
            <Play className="size-4 fill-current" />
            See how it works
          </Button>
        </div>
      </div>

      {/* Hero image card */}
      <div className="w-full rounded-3xl overflow-hidden border border-border/30 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] ring-1 ring-white/5">
        <div
          className="relative w-full aspect-[16/9]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.04 262) 0%, oklch(0.17 0.07 255) 40%, oklch(0.13 0.05 275) 100%)",
          }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Top glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,oklch(0.55_0.06_242/0.25),transparent)]" />
          {/* Center accent glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_50%,oklch(0.83_0.13_74/0.08),transparent)]" />
          {/* Placeholder label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-white/15 select-none">
              Image
            </span>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
        <div className="flex flex-col gap-4 p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md shadow-md">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
            Vision
          </span>
          <TypographyH3>
            To become a symbol of Filipino technological ingenuity.
          </TypographyH3>
          <TypographyMuted>
            By solving real-world challenges through software solutions in order
            to empower our community to chart its own path to prosperity.
          </TypographyMuted>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md shadow-md">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">
            Mission
          </span>
          <TypographyH3>
            To develop innovative technology solutions that empower communities.
          </TypographyH3>
          <TypographyMuted>
            We provide practical solutions to real-world challenges, working
            toward a more sustainable and inclusive future for all.
          </TypographyMuted>
        </div>
      </div>
    </section>
  );
}

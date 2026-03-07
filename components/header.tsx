import { TypographyH1, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24 gap-6">
      <TypographyH1>
        <span className="text-foreground">Transforming </span>
        <span className="text-[var(--accent)]">challenges</span>
        <br />
        <span className="text-foreground">into </span>
        <span className="text-[var(--accent)]">innovations</span>
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
    </section>
  );
}

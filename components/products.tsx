import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/typography";
import { products } from "@/data/products";

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Beta: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  "In Development":
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

export function Products() {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full text-start">
        <TypographyH2>Our Products</TypographyH2>
        <div className="mt-4">
          <TypographyP>
            Innovations we have built to solve real-world problems and empower
            the people around us.
          </TypographyP>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((product) => (
          <Card
            key={product.name}
            className="group relative flex flex-col overflow-hidden border border-border/60 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1),0_16px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 gap-0 py-0"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[var(--accent)] to-[var(--chart-4)] rounded-t-xl" />

            <CardHeader className="pt-6 pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1.5">
                  {/* Status badge */}
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                      statusStyles[product.status]
                    }`}
                  >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
                    {product.status}
                  </span>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-sm leading-relaxed mt-1">
                {product.tagline}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-5 px-6 pb-6">
              {/* Inset description box */}
              <div className="rounded-lg bg-muted/60 border border-border/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] px-4 py-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              {product.href && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-fit gap-1.5 mt-auto"
                >
                  <Link href={product.href}>
                    Visit BizNest
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

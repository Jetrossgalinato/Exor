import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/typography";
import { products } from "@/data/products";

export function Products() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="w-full text-start">
        <TypographyH2>Our Products</TypographyH2>
        <div className="mt-2 md:mt-4">
          <TypographyP>
            Innovations we have built to solve real-world problems and empower
            the people around us.
          </TypographyP>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 w-full">
        {products.map((product) => (
          <Card
            key={product.name}
            className="relative w-full pt-0 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/60 py-0 gap-0 sm:py-6 sm:gap-6"
          >
            <div className="absolute inset-0 z-30 aspect-video" />
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={338}
                className="relative z-20 aspect-video w-full object-contain dark:brightness-80 scale-90"
              />
            ) : (
              <div className="relative z-20 aspect-video w-full bg-gradient-to-br from-[var(--accent)]/20 via-[var(--chart-4)]/20 to-[var(--chart-1)]/20 flex items-center justify-center">
                <span className="text-4xl font-bold tracking-tight text-foreground/10 select-none">
                  {product.name}
                </span>
              </div>
            )}
            <CardHeader className="px-2.5 pt-2 pb-1 sm:px-6 sm:pt-6 sm:pb-0">
              <CardAction>
                <Badge className="hidden sm:flex bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                  {product.status}
                </Badge>
              </CardAction>
              <CardTitle className="text-sm sm:text-base">
                {product.name}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                {product.description}
              </CardDescription>
            </CardHeader>
            {product.href && (
              <CardFooter className="px-2.5 pb-2 sm:px-6 sm:pb-6">
                <Button
                  asChild
                  size="sm"
                  className="w-full gap-1 sm:gap-1.5 sm:h-10 sm:text-sm"
                >
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {product.name}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

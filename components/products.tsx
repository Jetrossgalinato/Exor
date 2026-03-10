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
            className="relative mx-auto w-full pt-0 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/60"
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
            <CardHeader>
              <CardAction>
                <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                  {product.status}
                </Badge>
              </CardAction>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            {product.href && (
              <CardFooter>
                <Button asChild className="w-full gap-1.5">
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

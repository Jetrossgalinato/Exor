import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardImageProps {
  title: string;
  description: string;
  tag: string;
  image?: string;
}

export function CardImage({
  title,
  description,
  tag,
  image = "https://avatar.vercel.sh/shadcn1",
}: CardImageProps) {
  return (
    <Card className="relative group mx-auto w-full h-full pt-0 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02] dark:hover:shadow-primary/5 border-border/40">
      <div className="absolute inset-0 z-30 aspect-video bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 opacity-60 group-hover:opacity-40" />
      <Image
        src={image}
        alt={title}
        width={600}
        height={338}
        className="relative z-20 aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{tag}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

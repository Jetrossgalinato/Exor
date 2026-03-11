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
    <Card className="relative group mx-auto w-full h-full pt-0 overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] dark:hover:shadow-primary/5 border-border/40 py-0 gap-0 sm:pt-0 sm:pb-6 sm:gap-6">
      <div className="absolute inset-0 z-30 aspect-video bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 opacity-60 group-hover:opacity-40 group-hover:scale-105" />
      <Image
        src={image}
        alt={title}
        width={600}
        height={338}
        className="relative z-20 aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <CardHeader className="px-2.5 pt-2 pb-2 sm:px-6 sm:pt-6 sm:pb-0">
        <CardAction>
          <Badge variant="secondary" className="text-[10px] sm:text-xs">
            {tag}
          </Badge>
        </CardAction>
        <CardTitle className="text-sm sm:text-base">{title}</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

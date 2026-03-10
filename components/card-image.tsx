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
    <Card className="relative mx-auto w-full h-full pt-0 overflow-hidden">
      <div className="absolute inset-0 z-30 aspect-video " />
      <Image
        src={image}
        alt={title}
        width={600}
        height={338}
        className="relative z-20 aspect-video w-full object-cover dark:brightness-80"
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

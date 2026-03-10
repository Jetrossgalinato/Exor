import { CardImage } from "@/components/card-image";
import { TypographyH2, TypographyP } from "@/components/typography";
import { awards } from "@/data/awards";

export function Awards() {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full text-start">
        <TypographyH2>Awards &amp; Recognition</TypographyH2>
        <div className="mt-4">
          <TypographyP>
            Milestones and honors that reflect our commitment to excellence and
            innovation.
          </TypographyP>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {awards.map((award, index) => (
          <CardImage
            key={index}
            title={award.title}
            description={award.description}
            tag={award.tag}
            image={award.image}
          />
        ))}
      </div>
    </div>
  );
}

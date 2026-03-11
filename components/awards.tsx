"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardImage } from "@/components/card-image";
import { TypographyH2, TypographyP } from "@/components/typography";
import { awards } from "@/data/awards";

export function Awards() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="w-full text-start">
          <TypographyH2>Awards &amp; Trainings</TypographyH2>
          <div className="mt-2 md:mt-4">
            <TypographyP>
              Milestones and honors that reflect our commitment to excellence
              and innovation.
            </TypographyP>
          </div>
        </div>

        {/* Carousel content */}
        <div className="w-full">
          <CarouselContent className="-ml-6">
            {awards.map((award, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 pb-12 h-full">
                  <CardImage
                    title={award.title}
                    description={award.description}
                    tag={award.tag}
                    image={award.image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <div className="flex justify-end gap-2 w-full -mt-12">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </div>
    </Carousel>
  );
}

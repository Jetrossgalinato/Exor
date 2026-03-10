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

const servicesData = [
  {
    title: "AI-Powered Geospatial Analysis",
    description:
      "Unlock hidden patterns in spatial data using advanced machine learning algorithms for predictive modeling and automated feature extraction.",
    tag: "Featured",
    image: "https://avatar.vercel.sh/geospatial-ai",
  },
  {
    title: "Smart Urban Planning",
    description:
      "Optimize city infrastructure and resource allocation with data-driven insights derived from comprehensive GIS mapping and demographic analysis.",
    tag: "Featured",
    image: "https://avatar.vercel.sh/urban-planning",
  },
  {
    title: "Remote Sensing & Monitoring",
    description:
      "Monitor environmental changes, vegetation health, and land use in real-time through high-resolution satellite imagery processing.",
    tag: "Featured",
    image: "https://avatar.vercel.sh/remote-sensing",
  },
  {
    title: "Location Intelligence for Business",
    description:
      "Enhance decision-making with precise location data, helping businesses identify optimal sites and understand market dynamics.",
    tag: "Featured",
    image: "https://avatar.vercel.sh/location-intelligence",
  },
];

export function Services() {
  return (
    <section className="w-full py-10 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          <div className="w-full text-start">
            <TypographyH2>Services</TypographyH2>
            <div className="mt-4">
              <TypographyP>
                Explore our wide range of services tailored just for you.
              </TypographyP>
            </div>
          </div>

          {/* Carousel content */}
          <div className="w-full">
            <CarouselContent className="-ml-6">
              {servicesData.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <CardImage
                      title={service.title}
                      description={service.description}
                      tag={service.tag}
                      image={service.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <div className="flex justify-end gap-2 w-full">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}

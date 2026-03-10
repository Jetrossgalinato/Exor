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
    title: "Custom GIS Development",
    description:
      "Building tailored web and mobile mapping applications that integrate seamlessly with your existing workflows and data infrastructure.",
    tag: "Service",
    image: "/images/gis.jpeg",
  },
  {
    title: "AI Model Training",
    description:
      "Developing and fine-tuning custom machine learning models for specific geospatial tasks like object detection and land cover classification.",
    tag: "Service",
    image: "/images/ai.jpg",
  },
  {
    title: "Data Engineering & ETL",
    description:
      "Designing robust data pipelines to process, clean, and manage massive geospatial datasets for efficient storage and retrieval.",
    tag: "Service",
    image: "/images/data.jpg",
  },
  {
    title: "Geospatial Consulting",
    description:
      "Providing expert guidance on GIS architecture, technology stack selection, and digital transformation based on spatial data.",
    tag: "Service",
    image: "/images/geo.jpg",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="w-full pt-8 pb-24 sm:pt-16 sm:pb-32 overflow-hidden relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
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
                  <div className="p-1 pb-12 h-full">
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

          <div className="flex justify-end gap-2 w-full -mt-12">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  TypographyH2,
  TypographyP,
  TypographyH4,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";
import { servicesData } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="w-full pt-5 pb-5 sm:pt-16 sm:pb-16 overflow-hidden relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4 md:gap-8">
        <div className="w-full text-start">
          <TypographyH2>Services</TypographyH2>
          <div className="mt-2 md:mt-4">
            <TypographyP>
              Explore our wide range of services tailored just for you.
            </TypographyP>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-6 w-full">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group flex flex-col overflow-hidden border border-border/60 bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_24px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 py-0 gap-0 sm:py-6 sm:gap-6"
              >
                {/* Top accent gradient line */}
                <div className="h-[3px] w-full bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

                {/* Header: icon + title + tag inline */}
                <CardHeader className="flex flex-row items-center gap-1.5 pt-2 pb-1 px-2.5 md:gap-2.5 md:pt-3 md:px-5">
                  <div className="hidden sm:flex flex-shrink-0 w-5 h-5 md:w-7 md:h-7 rounded-md md:rounded-lg bg-primary/10 border border-primary/20 items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <TypographySmall className="hidden sm:block tracking-[0.25em] uppercase text-muted-foreground/60">
                      {service.tag}
                    </TypographySmall>
                    <TypographyH4>{service.title}</TypographyH4>
                  </div>
                </CardHeader>

                <CardContent className="px-2.5 md:px-5 pb-2 md:pb-3 pt-0">
                  {/* Subtle gradient divider */}
                  <div className="h-px w-full bg-gradient-to-r from-border/70 to-transparent mb-1.5 sm:mb-2" />
                  <TypographyMuted>{service.description}</TypographyMuted>
                  {/* Feature tags */}
                  <div className="hidden sm:flex flex-wrap gap-1.5 md:gap-3 mt-1.5 md:mt-3">
                    {service.features.map((feature) => (
                      <TypographySmall
                        key={feature}
                        className="px-2 py-0.5 rounded-full bg-primary/8 text-primary/80 border border-primary/15"
                      >
                        {feature}
                      </TypographySmall>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

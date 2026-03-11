import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  TypographyH2,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";
import { teamMembers } from "@/data/team";
import { Products } from "@/components/products";
import { Awards } from "@/components/awards";

export function About() {
  return (
    <section
      id="about"
      className="w-full pt-5 pb-12 sm:pt-16 sm:pb-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-10 md:gap-40">
        {/* Awards & Recognition */}
        <Awards />
        {/* Products */}
        <Products />

        {/* Meet the team */}
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="w-full text-center flex flex-col items-center">
            <TypographyH2>Meet the team</TypographyH2>
            <div className="mt-1 md:mt-4 flex flex-col gap-2 md:gap-4 text-muted-foreground max-w-3xl">
              <div className="hidden sm:block">
                <TypographyP>
                  We are a team of passionate individuals dedicated to creating
                  innovative solutions that empower businesses and communities.
                </TypographyP>
              </div>
              <div className="hidden sm:block">
                <TypographyP>
                  Our journey began with a simple idea: to bridge the gap
                  between complex technology and everyday problems. Today, we
                  continue to push the boundaries of what&apos;s possible,
                  driven by our shared mission to build a better future through
                  software.
                </TypographyP>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-x-3 gap-y-5 sm:gap-x-8 sm:gap-y-12 md:gap-12 w-full max-w-5xl justify-items-center mx-auto">
            {teamMembers.map((member, index) => (
              <Drawer key={index}>
                <div className="flex flex-col items-center text-center gap-2 sm:gap-4 group w-full">
                  <DrawerTrigger asChild>
                    <div className="relative w-14 h-14 sm:w-40 sm:h-40 overflow-hidden rounded-full border-2 sm:border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-105 ring-1 ring-black/5 dark:ring-white/10 cursor-pointer">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover dark:brightness-80 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-medium">
                        Click to learn more
                      </div>
                    </div>
                  </DrawerTrigger>

                  <div className="flex flex-col gap-0.5 sm:gap-1.5">
                    <h3 className="font-semibold text-xs sm:text-lg">
                      {member.name}
                    </h3>
                    <div className="hidden sm:block">
                      <TypographyMuted>{member.role}</TypographyMuted>
                    </div>
                  </div>

                  <DrawerContent>
                    <div className="mx-auto w-full max-w-3xl">
                      <DrawerHeader>
                        <DrawerTitle>Member Profile</DrawerTitle>
                        <DrawerDescription>
                          Get to know our team better.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                        <div className="relative w-32 h-32 sm:w-48 sm:h-48 shrink-0 overflow-hidden rounded-full border-4 border-background shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-4 text-center sm:text-left">
                          <div className="flex flex-col gap-1">
                            <h3 className="font-bold tracking-tight text-3xl">
                              {member.name}
                            </h3>
                            <p className="text-primary font-medium text-lg">
                              {member.role}
                            </p>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {member.bio ||
                              "Passionate about technology and innovation. Dedicated to building solutions that make a real difference."}
                          </p>
                        </div>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </div>
              </Drawer>
            ))}{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

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

const teamMembers = [
  {
    name: "Roman Osorio",
    role: "CEO & Founder",
    image: "/images/roman.png",
    bio: "Roman is a visionary leader with experience in sales and business. He founded our company with the mission to solve complex problems through innovative software solutions. Roman is passionate about empowering teams and fostering a culture of continuous learning.",
  },
  {
    name: "Centmarde Campado",
    role: "CTO",
    image: "/images/marde.png",
    bio: "Centmarde leads our technological vision with a focus on innovation and scalability. He has experience in GIS and AI. With deep expertise in cloud infrastructure and software architecture, he ensures our solutions remain at the cutting edge of the industry.",
  },
  {
    name: "Mardz Allyna Lidasan",
    role: "CFO",
    image: "/images/mardz.jpg",
    bio: "Mardz manages the financial strategy and operations of the company. Her expertise in financial planning and risk management ensures sustainable growth and long-term stability for our organization.",
  },
  {
    name: "Jetross Galinato",
    role: "Data Analyst",
    image: "/images/jetross.jpg",
    bio: "Jetross specializes in turning complex data into actionable insights. He utilizes advanced analytics and visualization tools to help businesses make data-driven decisions and optimize performance.",
  },
  {
    name: "John Paul Pracullos",
    role: "Backend Developer",
    image: "/images/jp.png",
    bio: "John Paul is an IT student at Caraga State University specializing in backend development, AI, and mobile applications. He builds scalable, high-performance microservices using Java, Python, Spring Boot, and FastAPI.",
  },
  {
    name: "Prince Niño Antigo",
    role: "Full-Stack Developer",
    image: "/images/prince.png",
    bio: "Prince is a full-stack web developer (BSIT) based in Sibagat, Philippines. He specializes in building applications using React, Next.js, Node.js, Laravel, Bootstrap, PostgreSQL, and Supabase.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="w-full pt-8 pb-24 sm:pt-16 sm:pb-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="w-full text-center flex flex-col items-center">
          <TypographyH2>Meet the team</TypographyH2>
          <div className="mt-4 flex flex-col gap-4 text-muted-foreground max-w-3xl">
            <TypographyP>
              We are a team of passionate individuals dedicated to creating
              innovative solutions that empower businesses and communities.
            </TypographyP>
            <TypographyP>
              Our journey began with a simple idea: to bridge the gap between
              complex technology and everyday problems. Today, we continue to
              push the boundaries of what&apos;s possible, driven by our shared
              mission to build a better future through software.
            </TypographyP>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 sm:gap-12 w-full max-w-5xl justify-items-center mx-auto">
          {teamMembers.map((member, index) => (
            <Drawer key={index}>
              <div className="flex flex-col items-center text-center gap-4 group w-full">
                <DrawerTrigger asChild>
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-105 ring-1 ring-black/5 dark:ring-white/10 cursor-pointer">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-medium">
                      Click to learn more
                    </div>
                  </div>
                </DrawerTrigger>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <TypographyMuted>{member.role}</TypographyMuted>
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
          ))}
        </div>
      </div>
    </section>
  );
}

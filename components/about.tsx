import Image from "next/image";
import {
  TypographyH2,
  TypographyMuted,
  TypographyP,
} from "@/components/typography";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "CEO & Founder",
    image: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Mike Johnson",
    role: "Lead Engineer",
    image: "https://avatar.vercel.sh/mike",
  },
  {
    name: "Emily Davis",
    role: "Product Designer",
    image: "https://avatar.vercel.sh/emily",
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    image: "https://avatar.vercel.sh/david",
  },
  {
    name: "Jessica Lee",
    role: "Marketing Lead",
    image: "https://avatar.vercel.sh/jessica",
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
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 group w-full"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-105 ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <TypographyMuted>{member.role}</TypographyMuted>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

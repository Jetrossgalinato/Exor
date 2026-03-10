export interface Award {
  title: string;
  description: string;
  tag: string;
  image?: string;
}

export const awards: Award[] = [
  {
    title: "2nd Runner Up",
    description:
      "Hack4Smarter Butuan - Elev8PH Startup Challenge 2025: Student Category",
    tag: "Award",
    image: "/images/header1.jpg",
  },
  {
    title: "Regional Innovation Award",
    description:
      "Awarded for pioneering geospatial technology solutions that address real-world challenges in Mindanao.",
    tag: "Recognition",
    image: "/images/gis.jpeg",
  },
  {
    title: "Excellence in AI Development",
    description:
      "Honored for delivering cutting-edge AI-powered applications that drive measurable results for businesses.",
    tag: "Recognition",
    image: "/images/ai.jpg",
  },
];

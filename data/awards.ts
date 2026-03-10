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
    image: "/images/2nd.jpg",
  },
  {
    title: "3rd Runner Up",
    description:
      "Awarded for pioneering geospatial technology solutions that address real-world challenges in Mindanao.",
    tag: "Award",
    image: "/images/izone.jpg",
  },
  {
    title: "MVP Presentation",
    description:
      "Recognized for delivering a compelling Minimum Viable Product presentation that showcased innovation and business potential.",
    tag: "Recognition",
    image: "/images/mvp.jpg",
  },
];

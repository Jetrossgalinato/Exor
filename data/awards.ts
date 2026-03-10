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
      "Earned 2nd Runner Up at the Hack4Smarter Butuan - Elev8PH Startup Challenge 2025 under the Student Category, competing against innovative teams with our tech-driven solution for smarter city challenges.",
    tag: "Award",
    image: "/images/2nd.jpg",
  },
  {
    title: "3rd Runner Up",
    description:
      "Awarded 3rd Runner Up at the LUNSAD National Innovation Day in Caraga, recognizing our team's innovative approach to solving local challenges through technology.",
    tag: "Award",
    image: "/images/izone.jpg",
  },
  {
    title: "15th Runner Up",
    description:
      "Placed 15th Runner Up at the Philippine Startup Challenge: Regional Level, competing among top student-led startups across the region with our innovative tech solution.",
    tag: "Award",
    image: "/images/15.jpg",
  },
  {
    title: "MVP Presentation",
    description:
      "Recognized for delivering a compelling Minimum Viable Product presentation that showcased innovation and business potential.",
    tag: "Recognition",
    image: "/images/mvp.jpg",
  },

  {
    title: "AI Training",
    description:
      "Completed the DOST AI Training Workshop, gaining hands-on experience in artificial intelligence concepts, tools, and practical applications relevant to the local tech industry.",
    tag: "Training",
    image: "/images/aiTraining.jpg",
  },
  {
    title: "Code the City: Startup Bootcamp",
    description:
      " Code the City: The Bootcamp for Hack4Smarter Butuan - Kickstarting AI-Powered Innovations for a Smarter City held on July 21-22, 2025 at Grand Palace Hotel, Butuan City",
    tag: "Award",
    image: "/images/code.jpg",
  },
];

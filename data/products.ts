export interface Product {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Live" | "Beta" | "In Development";
  image?: string;
  href?: string;
}

export const products: Product[] = [
  {
    name: "BizNest",
    image: "/images/biznest.jpeg",
    tagline:
      "An AI-powered system that helps choose business locations and connects local businesses in your city",
    description:
      "An AI-powered system that helps choose business locations and connects local businesses in your city",
    tags: ["SaaS", "Business", "Analytics"],
    status: "Live",
    href: "https://biznest-gitpush.vercel.app/",
  },
];

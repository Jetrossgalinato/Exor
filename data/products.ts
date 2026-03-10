export interface Product {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Live" | "Beta" | "In Development";
  href?: string;
}

export const products: Product[] = [
  {
    name: "BizNest",
    tagline: "Your all-in-one business management platform",
    description:
      "BizNest is a comprehensive platform designed to help small and medium-sized businesses manage their operations, track performance, and grow with confidence. From inventory and sales to team collaboration and analytics — everything in one place.",
    tags: ["SaaS", "Business", "Analytics"],
    status: "Live",
    href: "https://biznest-gitpush.vercel.app/",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
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

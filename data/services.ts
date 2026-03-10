export interface Service {
  title: string;
  description: string;
  tag: string;
  image: string;
}

export const servicesData: Service[] = [
  {
    title: "Custom GIS Development",
    description:
      "Building tailored web and mobile mapping applications that integrate seamlessly with your existing workflows and data infrastructure.",
    tag: "Service",
    image: "/images/gis.jpeg",
  },
  {
    title: "AI Model Training",
    description:
      "Developing and fine-tuning custom machine learning models for specific geospatial tasks like object detection and land cover classification.",
    tag: "Service",
    image: "/images/ai.jpg",
  },
  {
    title: "Data Engineering & ETL",
    description:
      "Designing robust data pipelines to process, clean, and manage massive geospatial datasets for efficient storage and retrieval.",
    tag: "Service",
    image: "/images/data.jpg",
  },
  {
    title: "Geospatial Consulting",
    description:
      "Providing expert guidance on GIS architecture, technology stack selection, and digital transformation based on spatial data.",
    tag: "Service",
    image: "/images/geo.jpg",
  },
];

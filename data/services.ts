import { Map, Brain, Database, Globe, type LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  features: string[];
}

export const servicesData: Service[] = [
  {
    title: "Custom GIS Development",
    description:
      "Building tailored web and mobile mapping applications that integrate seamlessly with your existing workflows and data infrastructure.",
    tag: "Service",
    icon: Map,
    features: ["Interactive Maps", "Mobile-Ready", "API Integration"],
  },
  {
    title: "AI Model Training",
    description:
      "Developing and fine-tuning custom machine learning models for specific geospatial tasks like object detection and land cover classification.",
    tag: "Service",
    icon: Brain,
    features: ["Object Detection", "Land Classification", "Custom Datasets"],
  },
  {
    title: "Data Engineering & ETL",
    description:
      "Designing robust data pipelines to process, clean, and manage massive geospatial datasets for efficient storage and retrieval.",
    tag: "Service",
    icon: Database,
    features: ["Data Pipelines", "Cloud Storage", "Real-time Processing"],
  },
  {
    title: "Geospatial Consulting",
    description:
      "Providing expert guidance on GIS architecture, technology stack selection, and digital transformation based on spatial data.",
    tag: "Service",
    icon: Globe,
    features: [
      "GIS Architecture",
      "Tech Stack Review",
      "Digital Transformation",
    ],
  },
];

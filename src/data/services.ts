import { LucideIcon } from "lucide-react";
import { Code2, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building fast, scalable, and modern web applications",
    icon: Code2,
  },
  {
    id: "ui-design",
    title: "UI/UX Design",
    description: "Crafting beautiful and intuitive user interfaces",
    icon: Palette,
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Creating seamless mobile experiences",
    icon: Smartphone,
  },
  {
    id: "web-design",
    title: "Web Design",
    description: "Designing responsive and engaging websites",
    icon: Globe,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building robust server-side solutions",
    icon: Database,
  },
  {
    id: "performance",
    title: "Performance",
    description: "Optimizing for speed and efficiency",
    icon: Zap,
  },
];

export default services;

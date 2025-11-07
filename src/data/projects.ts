export type Project = {
  id: string;
  name: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "landing",
    name: "Landing",
    image: "/project1.png",
    link: "/hex-ui.com/templates",
  },
  {
    id: "forms",
    name: "Creative Forms",
    image: "/project5.png",
    link: "/hex-ui.com/templates",
  },
  {
    id: "studio",
    name: "Portfolio Design",
    image: "/project4.png",
    link: "/hex-ui.com/templates",
  },
  {
    id: "brand",
    name: "Branding Work",
    image: "/project4.png",
    link: "/navdeepsingh.dev",
  },
  {
    id: "dash",
    name: "Dashboard UI",
    image: "/project5.png",
    link: "/projects/dashboard",
  },
  {
    id: "mobile",
    name: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    link: "/projects/mobile",
  },
];

export default projects;

export type Project = {
  id: string;
  name: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "landio",
    name: "Landio",
    image:
      "https://images.unsplash.com/photo-1702479744062-1880502275b1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    link: "/projects/landio",
  },
  {
    id: "meily",
    name: "Meily",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    link: "/projects/meily",
  },
  {
    id: "studio",
    name: "Studio Case",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    link: "/projects/studio",
  },
  {
    id: "brand",
    name: "Branding Work",
    image:
      "https://images.unsplash.com/photo-1559028012-48123f47e6c6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
    link: "/projects/branding",
  },
  {
    id: "dash",
    name: "Dashboard UI",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
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

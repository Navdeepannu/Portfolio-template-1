import { CTA } from "@/components/animated-cta";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Process />
      <Services />
      <Contact />
    </div>
  );
}

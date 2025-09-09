import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { ProgressiveBlur } from "@/components/ui/scroll-blur";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
    </div>
  );
}

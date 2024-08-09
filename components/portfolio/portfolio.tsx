

import Hero from "./ui/hero";
import Projects from "./ui/projects";
import About from "./ui/about";

export default function Portfolio({name}:{name :string}) {
  return (    
      <main className="flex-1">
        <Hero name={name} designation="Angular Developer" />
        <Projects />
        <About />
      </main>
  );
}


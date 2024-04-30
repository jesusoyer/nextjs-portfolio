import Hero from "./Hero"
import HomeProjects from "./HomepageProjects";

export default function homepage() {
    return (
     <section className="relative bg-palette6">
      <Hero />
      <HomeProjects />
    </section>
    )
  }
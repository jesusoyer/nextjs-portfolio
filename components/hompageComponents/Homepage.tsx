import Hero from "./Hero"
import HomeProjects from "./HomepageProjects";
import Featured from "./Featured"
export default function homepage() {
    return (
     <section className="relative ">
      <Hero />
      <Featured />
      <div className="bg-palette6">
      <HomeProjects />
      </div>
    </section>
    )
  }
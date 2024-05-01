import Hero from "./Hero"
import HomeProjects from "./HomepageProjects";
import Intro from "./intro"
export default function homepage() {
    return (
     <section className="relative ">
      <Hero />
      <Intro />
      <div className="bg-palette3">
      <HomeProjects />
      </div>
    </section>
    )
  }
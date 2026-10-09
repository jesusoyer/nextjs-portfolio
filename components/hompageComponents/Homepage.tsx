import Hero from "./Hero"
import HomeProjects from "./HomepageProjects";
import Featured from "./Featured"
import Blog from "./Blog"
import OffTheClock from "./offTheClock"
import Books from "./books"
export default function homepage() {
    return (
     <section className="relative ">
      <Hero />
      {/* <Featured /> */}
      <div className="bg-palette6">
      <HomeProjects />
      </div>
      <Blog />
<OffTheClock />
<Books />
    </section>
    )
  }
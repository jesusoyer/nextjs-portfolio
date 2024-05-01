
import OtherNavbar from "../components/OtherNavbar";
import Footer from "@/components/Footer";
import Projects from "../components/projectsPageComponents/ProjectsPage";
import ProjectHeader from "../components/projectsPageComponents/ProjectsPageHeader";
export default function projects() {
  return (
   <main>
    <OtherNavbar />
    <ProjectHeader />
   <Projects  />
   <Footer />
   </main>
  )
}

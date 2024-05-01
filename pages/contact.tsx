import Navbar from "../components/OtherNavbar";
import Footer from "@/components/Footer";
import ContactPage from "../components/contactPageComponents/ContactPage";
import OtherNavbar from "../components/OtherNavbar";
import ResumeSection from "@/components/contactPageComponents/ResumeSection";
// import ContactHero from '../components/ContactPageHero';
export default function contacts() {
  return (
   <main>
    <OtherNavbar />
    {/* <ContactHero /> */}
    <ResumeSection />
   <ContactPage />
   
   <Footer />
   </main>
  )
}

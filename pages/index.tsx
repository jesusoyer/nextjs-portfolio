import Homepage from "../components/homepage";
import Navbar from "../components/Navbar";

export default function home() {
  return (
   <main>
    <Navbar />
    <Homepage />
    <ul>
      <li>welcome</li>
      <li>about</li>
      <li>projects preview link</li>
      
    </ul>
    <footer>footer goes here
      <ul>some social media links</ul>
      <ul>some general info</ul>
    </footer>
   </main>
  )
}

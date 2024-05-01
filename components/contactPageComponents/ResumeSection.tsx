import Image from "next/image";
import Link from "next/link";
import developerResume from './developerResumeImage.png';
import professionalResume from './professional resume image.png';

const ResumeSection = () => {
  return (
    <section className="mx-auto max-w-screen-lg mt-14 ">
        <div className="text-3xl text-center font-bold p-10">Experience</div>
  <div className="grid grid-cols-2 gap-4">
  <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
    <h2 className="text-xl font-bold mb-4">Developer Experience</h2>
    <Link href="https://docs.google.com/document/d/16KS41bwDhJm7bEe7ch4Cvdoxu0OoOjYR-1LaPPzmO7w/edit?usp=sharing"
    target="_blank"
    rel="noopener noreferrer">
      <Image src={developerResume} alt="Developer Resume image" className="max-w-full h-auto" /></Link>
    </div>
    <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
  <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
  <Link href="https://docs.google.com/document/d/1-Z4cFljiCr8Ba5CvnpqjIZKTbNs65D55Jb0tk9jsAyk/edit?usp=sharing"
  target="_blank"
  rel="noopener noreferrer">
  <Image src={professionalResume} alt="Test Image" className="max-w-full h-auto" />
  </Link>
</div>
    
  </div>
</section>
  )
}

export default ResumeSection

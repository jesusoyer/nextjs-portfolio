import React from 'react';
import hhPic from './HispanicHackers.png';
import Image from "next/image";
import Link from "next/link";

const ProjectsPageHeader = () => {
  return (
    <section className='border-b-8 border-palette6'>
        
      <h2 className="bg-palette1 text-palette5 mt-16 text-center text-3xl font-bold p-4">MY PROJECTS</h2>
      <p className='bg-palette1 border-b-8 border-palette6 text-palette5 p-4 text-center '>Welcome to my projects page! Here, you'll find my latest creations, each showcasing the skills and technologies I've been actively practicing.</p>
      <div className="grid gap-x-6 gap-y-5 grid-cols-1 lg:grid-cols-2 lg:gap-x-12 shadow-outline p-4 bg-palette5 ">
        <div>
            <h1 className='text-center text-3xl p-6'>Hispanic Hackers Revamp</h1>
            <p className='text-center'>I enthusiastically volunteered to contribute to the revitalization of the website for our local nonprofit, Hispanic Hackers. Embracing the transition from React JS to Next JS, our team of five dedicated individuals collaborated closely. With a primary focus on enhancing the landing page. Drawing inspiration from a meticulously crafted Figma design, I infused the page with dynamic elements and engaging conditional rendering techniques. The result? A visually captivating and user-friendly landing page that reflects the vibrancy of our organization's mission. Curious to see the fruits of our labor? Take a peek at the final product through the link below! <span>
            <Link
                href="https://www.hispanichackers.com/"
                target="_blank"
                rel="noopener noreferrer"
               className='underline hover:text-palette2 font-bold '
              >
                To Hispanic Hackers Website...
              </Link>
                </span></p>
            </div>
        <Image
              src={hhPic}
              alt="Hispanic Hackers Image"
              className="object-contain h-full w-full rounded-lg  border-4 border-palette4 "
            /></div>

      
      
    </section>
  )
}

export default ProjectsPageHeader;

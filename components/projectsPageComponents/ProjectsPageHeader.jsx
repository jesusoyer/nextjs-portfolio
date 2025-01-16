import React from 'react';
import hhPic from './HispanicHackers.png';
import Logo from './personalLogo3.png';
import Image from "next/image";
import Link from "next/link";

const ProjectsPageHeader = () => {
  return (
    <section className='border-b-8 border-t-8 mt-14 border-palette6'>
        

  

  {/* Image Section */}
  <div className="bg-black flex justify-center items-center h-48">
    <Image
      src={Logo}
      alt="Personal logo"
      className="w-1/4 max-w-[100px] mx-auto"
    />
  </div>     
      
    </section>
  )
}

export default ProjectsPageHeader;

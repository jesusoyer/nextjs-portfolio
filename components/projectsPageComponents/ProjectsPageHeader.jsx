import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ProjectsPageHeader = () => {
  return (
    <section className='bg-black border-b border-neutral-800 py-16 px-6'>
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/profileImages/personalLogo.png"
            alt="Jesus Oyervides Jr"
            width={80}
            height={80}
            className="mx-auto opacity-90"
          />
        </div>
        
        <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          Portfolio
        </div>
        <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
          Selected Work
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          A collection of projects showcasing web development, automation, 
          and AI integration. Each piece solves real problems for real users.
        </p>
      </div>
    </section>
  )
}

export default ProjectsPageHeader;
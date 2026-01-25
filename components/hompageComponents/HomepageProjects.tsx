import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const HomepageProjects = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* MORE PROJECTS - Grid */}
        <div className="border-t border-neutral-800 pt-16">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-light text-white">More Work</h3>
            <Link 
              href="/projects"
              className="text-sm uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project Card 1 - Templify (2026 - NEWEST) */}
            <Link 
              href="https://templify-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800 mb-4">
                <Image
                  src="/images/projects/templifyImage.png"
                  alt="Templify"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                {/* Date stamp */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-neutral-300 uppercase tracking-wider">
                  2026
                </div>
              </div>
              <h4 className="text-xl font-light text-white mb-2 group-hover:text-neutral-300 transition-colors">
                Templify
              </h4>
              <p className="text-sm text-neutral-500 mb-3">
                Email template generator with customizable designs and export options
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">React</span>
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">TypeScript</span>
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">Next.js</span>
              </div>
            </Link>

            {/* Project Card 2 - Truc Viet (2024) */}
            <Link 
              href="https://www.trucviet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800 mb-4">
                <Image
                  src="/images/projects/trucVietRevamp.png"
                  alt="Truc Viet Website"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                {/* Date stamp */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-neutral-300 uppercase tracking-wider">
                  2024
                </div>
              </div>
              <h4 className="text-xl font-light text-white mb-2 group-hover:text-neutral-300 transition-colors">
                Truc Viet Website Revamp
              </h4>
              <p className="text-sm text-neutral-500 mb-3">
                Nonprofit website redesign and migration to Squarespace
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">Squarespace</span>
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">Web Design</span>
              </div>
            </Link>

            {/* Project Card 3 - Hispanic Hackers (2023 - OLDEST) */}
            <Link href="/projects" className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800 mb-4">
                <Image
                  src="/images/projects/hispanicHackers.png"
                  alt="Hispanic Hackers"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                {/* Date stamp */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-neutral-300 uppercase tracking-wider">
                  2023
                </div>
              </div>
              <h4 className="text-xl font-light text-white mb-2 group-hover:text-neutral-300 transition-colors">
                Hispanic Hackers
              </h4>
              <p className="text-sm text-neutral-500 mb-3">
                Community platform amplifying underrepresented voices in tech
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">Next.js</span>
                <span className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">React</span>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HomepageProjects;
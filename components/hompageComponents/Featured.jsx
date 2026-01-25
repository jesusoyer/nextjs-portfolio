import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const FeaturedProject = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Selected Project
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Featured Work
          </h2>
        </div>

        {/* Project Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <Link 
            href="https://clerk-calculator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800">
              <Image
                src="/images/projects/clerkCalculator.png"
                alt="Clerk Calculator"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </div>
          </Link>

          {/* Text Content */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                Clerk Calculator
              </h3>
              <div className="h-px w-16 bg-white mb-6" />
              <p className="text-lg text-neutral-400 leading-relaxed">
                A streamlined web application designed to help court clerks calculate critical case dates 
                and deadlines with precision. Built with React and modern UI components, this tool automates 
                date calculations based on court rules, reducing errors and saving valuable time in the 
                legal workflow.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-400">
                React
              </span>
              <span className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-400">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-400">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-400">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 text-xs uppercase tracking-wider border border-neutral-700 text-neutral-400">
                Vercel
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://clerk-calculator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-white text-white font-light uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all group"
              >
                View Live Site
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="https://github.com/jesusoyer/Clerk-Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-neutral-700 text-neutral-400 font-light uppercase tracking-wider text-sm hover:border-white hover:text-white transition-all group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Code
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturedProject;
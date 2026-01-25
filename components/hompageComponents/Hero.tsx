import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center bg-black">
        
        {/* Background Image - Left Side */}
       <div className="absolute inset-0 md:w-1/2">
  <Image
    src="/images/profileImages/aztecMexicanImage.jpg"
    alt="Jesus Oyervides Jr"
    fill
    style={{ objectFit: 'cover', objectPosition: 'left 10%' }}
    className="opacity-90"
    priority
  />
          {/* Gradient fade to the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black"></div>
        </div>

        {/* Content - Right Side Overlaying */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 md:pl-12">
              
              {/* Name & Title */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight">
                  Jesus<br />
                  <span className="font-serif italic">Oyervides Jr.</span>
                </h1>
                
                <div className="h-px w-24 bg-white mb-6"></div>
                
                <p className="text-2xl md:text-3xl text-neutral-300 font-light">
                  Frontend Developer & Digital Craftsman
                </p>
              </div>

              {/* Artist Statement */}
              <div className="mb-12 bg-black/60 backdrop-blur-sm border border-neutral-700 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">
                  Artist Statement
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed font-light">
                  A creator who transforms complex problems into elegant solutions. 
                  With <span className="text-white font-medium">10+ years</span> of experience 
                  in the public sector and training from UT Austin, I craft web applications 
                  that bridge technology and human need.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="bg-black/60 backdrop-blur-sm border border-neutral-700 p-4 text-center">
                  <div className="text-3xl font-light text-white mb-1">10+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">Years</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm border border-neutral-700 p-4 text-center">
                  <div className="text-3xl font-light text-white mb-1">8+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">Works</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm border border-neutral-700 p-4 text-center">
                  <div className="text-3xl font-light text-white mb-1">∞</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">Ideas</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects"
                  className="px-8 py-4 bg-white text-black font-light uppercase tracking-wider text-sm hover:bg-neutral-200 transition-all text-center"
                >
                  Enter Gallery
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 border border-white text-white font-light uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all text-center"
                >
                  Contact
                </Link>
              </div>

              {/* Availability */}
              <div className="mt-8 text-neutral-400 text-sm">
                <p className="tracking-widest uppercase">Available for New Opportunities</p>
              </div>

            </div>
          </div>
        </div>

      </section>
    )
}
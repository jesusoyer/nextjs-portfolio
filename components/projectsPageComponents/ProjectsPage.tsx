import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
{
  id: 1,
  title: "Clerks Corner",
  description: "Free suite of browser-based tools for court clerks and legal professionals. Calculates backtime credit, adjusts dates, and formats file stamps to match your office's convention. Everything runs in the browser, so case data never leaves your device.",
  image: "/images/projects/ClerksCorner_image.png",
  video: "/videos/clerks_corner_video.mp4",
  tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  liveLink: "https://clerk-calculator.vercel.app/",
  githubLink: "https://github.com/jesusoyer/Clerk-Calculator",
  year: "2026",
  featured: true,
  comingSoon: false,
},
    {
      id: 2,
      title: "Templify",
      description: "Email template generator with customizable designs and export options. Streamlines email creation for marketing and communication teams.",
      image: "/images/projects/templifyImage.png",
      tags: ["React", "TypeScript", "Next.js"],
      liveLink: "https://templify-eta.vercel.app/",
      githubLink: "https://github.com/jesusoyer/templify",
      year: "2026",
      featured: true,
      comingSoon: false,
    },
    {
      id: 3,
      title: "Truc Viet Website Revamp",
      description: "Led the complete redesign and migration of a nonprofit's outdated WordPress site to Squarespace. Designed layout, migrated content, and connected domain.",
      image: "/images/projects/trucVietRevamp.png",
      tags: ["Squarespace", "Web Design", "Migration"],
      liveLink: "https://www.trucviet.org",
      year: "2024",
      featured: false,
      comingSoon: false,
    },
    {
      id: 4,
      title: "Hispanic Hackers",
      description: "Volunteered to build the landing page for a local nonprofit amplifying underrepresented voices in tech. Built from the ground up with Next.js.",
      image: "/images/projects/hispanicHackers.png",
      tags: ["Next.js", "React", "Community"],
      liveLink: "https://www.hispanichackers.com/",
      year: "2023",
      featured: false,
      comingSoon: false,
    },
    {
  id: 5,
  title: "Coming Soon",
  description: "New project currently in development.",
  image: "/images/projects/coming-soon.png",
  tags: ["TBD"],
  year: "2026",
  featured: false,
  comingSoon: true,
},
{
  id: 6,
  title: "Coming Soon",
  description: "New project currently in development.",
  image: "/images/projects/coming-soon.png",
  tags: ["TBD"],
  year: "2026",
  featured: false,
  comingSoon: true,
},
  ];

  return (
    <div className="bg-black min-h-screen">
    

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-2xl font-light text-white mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <div key={project.id} className="group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-neutral-300 uppercase tracking-wider">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-light text-white mb-3 group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs border border-neutral-800 text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        View Live
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        View Code
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div className="border-t border-neutral-800 pt-16">
            <h2 className="text-2xl font-light text-white mb-12">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.filter(p => !p.featured).map((project) => (
                <div key={project.id} className="group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden border border-neutral-800 mb-4">
                    {project.comingSoon ? (
                      // Coming Soon Placeholder
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🚧</div>
                          <div className="text-sm uppercase tracking-wider text-neutral-500">Coming Soon</div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                      </>
                    )}
                    
                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs text-neutral-300 uppercase tracking-wider">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs border border-neutral-800 text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links - Only show if not coming soon */}
                  {!project.comingSoon && (
                    <div className="flex gap-4 text-sm">
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors"
                        >
                          Live →
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors"
                        >
                          Code →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
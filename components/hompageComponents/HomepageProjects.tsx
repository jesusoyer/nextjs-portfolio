import React from 'react'
import Image from "next/image";
import Link from 'next/link';

type Project = {
  category: string;
  year: string;
  title: string;
  description: string;
  href: string;
  image: string;
  external?: boolean;
};

const projects: Project[] = [
  {
    category: "Web Development",
    year: "2026",
    title: "Templify",
    description: "Email template generator with export options.",
    href: "https://templify-eta.vercel.app/",
    image: "/images/projects/templifyImage.png",
    external: true,
  },
  {
    category: "Nonprofit Design",
    year: "2024",
    title: "Truc Viet Revamp",
    description: "Website redesign and migration to Squarespace.",
    href: "https://www.trucviet.org",
    image: "/images/projects/trucVietRevamp.png",
    external: true,
  },
  {
    category: "Community Platform",
    year: "2023",
    title: "Hispanic Hackers",
    description: "Amplifying underrepresented voices in tech.",
    href: "/projects",
    image: "/images/projects/hispanicHackers.png",
  },
];

const HomepageProjects = () => {
  return (
    <section className="relative bg-white py-24 px-6">
      {/* Pinstripe divider */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-ink" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-baseline mb-16 border-b border-ink/10 pb-6">
          <h3 className="text-2xl font-light text-burgundy tracking-wide">
            More Work
          </h3>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.2em] text-burgundy hover:text-ink transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-xs uppercase tracking-widest text-burgundy/70 mb-2">
                {project.category}, {project.year}
              </div>

              <h4 className="text-lg font-bold uppercase tracking-wide text-burgundy mb-1 group-hover:text-ink transition-colors">
                {project.title}
              </h4>

              <p className="text-sm text-ink/60 font-light leading-snug">
                {project.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomepageProjects;
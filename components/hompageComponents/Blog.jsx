import Image from "next/image";
import Link from "next/link";

export default function HomepageBlog() {
  return (
    <section className="relative bg-burgundy py-24 px-6">
      {/* Pinstripe divider */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-ink" />

      <Link
        href="/blog"
        className="group block max-w-3xl mx-auto text-center"
      >
        {/* Headline */}
        <h2 className="font-serif text-cream group-hover:text-ink transition-colors leading-tight">
          <span className="block text-3xl md:text-4xl uppercase tracking-wide mb-3">
            Off the Clock, On the Build
          </span>
          <span className="block text-2xl md:text-3xl normal-case text-cream/70 group-hover:text-ink transition-colors">
            Notes on rebuilding this site, one component at a time.
          </span>
        </h2>

        {/* Image */}
        <div className="relative w-72 h-80 md:w-80 md:h-96 mx-auto mt-12 mb-6 overflow-hidden">
          <Image
            src="/images/blogImages/excel_course_image.png"
            alt="From the blog"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Caption */}
        <p className="text-sm text-cream/50 tracking-wide">
          Tech · September 2026
        </p>
      </Link>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { entries } from "@/data/offTheClock";

export default function OffTheClock() {
  return (
    <main className="bg-burgundy min-h-screen">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-4">
          Off the Clock
        </div>
        <h1 className="text-5xl md:text-6xl font-light text-cream tracking-tight mb-6">
          Life, <span className="font-serif italic">lately.</span>
        </h1>
        <div className="h-px w-16 bg-cream/30 mb-6" />
        <p className="text-cream/70 font-light leading-relaxed max-w-xl">
          Notes on what I&apos;m reading, playing, and paying attention to
          outside of work — short and unpolished on purpose.
        </p>
      </div>

      {/* Entries */}
      <div className="max-w-5xl mx-auto px-6 divide-y divide-cream/10">
        {entries.map((entry, i) => {
          const imageFirst = i % 2 === 0;
          // Only entries that have an article body link to a page.
          const href = entry.body ? `/off-the-clock/${entry.slug}` : null;
          return (
            <article
              key={entry.id}
              className="py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Image */}
              <div
                className={`group relative overflow-hidden ${
                  entry.orientation === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]"
                } border border-cream/20 ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={entry.imageSrc}
                  alt={entry.title}
                  fill
                  className={`object-cover ${
                    href
                      ? "transition-transform duration-500 group-hover:scale-105"
                      : ""
                  }`}
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-[10px] text-cream/90 uppercase tracking-widest">
                  {entry.date}
                </div>
                {href && (
                  <Link
                    href={href}
                    aria-label={`Read ${entry.title}`}
                    className="absolute inset-0 z-10"
                  />
                )}
              </div>

              {/* Text */}
              <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-3">
                  {entry.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif italic text-cream mb-5 leading-tight">
                  {href ? (
                    <Link
                      href={href}
                      className="hover:text-white transition-colors"
                    >
                      {entry.title}
                    </Link>
                  ) : (
                    entry.title
                  )}
                </h2>
                <p className="text-cream/80 font-light leading-relaxed max-w-md">
                  {entry.blurb}
                </p>
                {href && (
                  <Link
                    href={href}
                    className="inline-block mt-6 text-xs uppercase tracking-widest text-cream/70 hover:text-cream border-b border-cream/30 hover:border-cream pb-0.5 transition-colors"
                  >
                    Read More →
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="max-w-3xl mx-auto px-6 pb-28 pt-8">
        <p className="text-cream/40 text-sm font-light tracking-wide">
          More soon — this page grows as things come up.
        </p>
      </div>
    </main>
  );
}
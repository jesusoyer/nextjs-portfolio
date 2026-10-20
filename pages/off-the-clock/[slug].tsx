import { useCallback, useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { entries, type Entry } from "@/data/offTheClock";

type Props = { entry: Entry };

// Build one page for every entry that has an article body.
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: entries.filter((e) => e.body).map((e) => ({ params: { slug: e.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const entry = entries.find((e) => e.slug === params?.slug);
  if (!entry || !entry.body) return { notFound: true };
  return { props: { entry } };
};

function ImageCarousel({
  images,
  alt,
  orientation,
}: {
  images: string[];
  alt: string;
  orientation: Entry["orientation"];
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );

  // Left / right arrow keys
  useEffect(() => {
    if (count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, goTo]);

  const frame =
    orientation === "portrait"
      ? "aspect-[3/4] max-w-sm mx-auto"
      : "aspect-[4/3]";

  return (
    <div className="mb-12">
      <div className={`relative border border-cream/20 overflow-hidden ${frame}`}>
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${alt} — photo ${i + 1} of ${count}`}
            fill
            priority={i === 0}
            sizes="(min-width: 768px) 768px, 100vw"
            className={`object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {count > 1 && (
          <>
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 border border-cream/40 text-cream hover:bg-black/60 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/40 border border-cream/40 text-cream hover:bg-black/60 transition-colors"
            >
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index}
              className={`h-[2px] transition-all ${
                i === index ? "w-10 bg-cream" : "w-4 bg-cream/30 hover:bg-cream/50"
              }`}
            />
          ))}
          <span className="ml-2 text-xs uppercase tracking-widest text-cream/50">
            {index + 1} / {count}
          </span>
        </div>
      )}
    </div>
  );
}

export default function OffTheClockEntry({ entry }: Props) {
  // Use the carousel photos if provided, otherwise just the main image.
  const photos = entry.images && entry.images.length > 0 ? entry.images : [entry.imageSrc];

  return (
    <main className="bg-burgundy min-h-screen">
      <article className="max-w-3xl mx-auto px-6 pt-28 pb-28">
        <Link
          href="/off-the-clock"
          className="text-xs uppercase tracking-[0.3em] text-cream/60 hover:text-cream transition-colors"
        >
          ← Off the Clock
        </Link>

        <div className="mt-10 mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cream/60">
          <span>{entry.category}</span>
          <span>•</span>
          <span>{entry.date}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif italic text-cream leading-tight mb-10">
          {entry.title}
        </h1>

        {/* Photos (carousel when there is more than one) */}
        <ImageCarousel
          images={photos}
          alt={entry.title}
          orientation={entry.orientation}
        />

        {/* Article body */}
        <div className="space-y-6">
          {entry.body?.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg text-cream/80 font-light leading-relaxed ${
                i === 0
                  ? "first-letter:text-6xl first-letter:font-serif first-letter:text-cream first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {entry.link && (
          <div className="mt-12">
            <a
              href={entry.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-cream hover:text-cream/70 transition-colors border-b border-cream/40 hover:border-cream pb-0.5"
            >
              {entry.link.label} ↗
            </a>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-cream/10">
          <Link
            href="/off-the-clock"
            className="text-xs uppercase tracking-widest text-cream/70 hover:text-cream border-b border-cream/30 hover:border-cream pb-0.5 transition-colors"
          >
            ← Back to Off the Clock
          </Link>
        </div>
      </article>
    </main>
  );
}
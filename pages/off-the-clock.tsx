import Image from "next/image";

type Entry = {
  id: string;
  date: string; // e.g. "Feb 2026"
  category: string; // e.g. "Reading", "Pickleball", "Cooking"
  title: string;
  blurb: string;
  imageSrc: string; // TODO: replace with real image paths in /public/images/offTheClock/
  orientation: "portrait" | "landscape";
};

// Add new posts here — newest first. Each one becomes a section below.
const entries: Entry[] = [
  {
    id: "reading-01",
    date: "Feb 2026",
    category: "Reading",
    title: "Coming Soon",
    blurb:
      "Coming Soon",
    imageSrc: "/images/offTheClock/bookshelf_image_2.png",
    orientation: "portrait",
  },
  {
    id: "pickleball-01",
    date: "Jan 2026",
    category: "Pickleball",
    title: "Coming Soon",
    blurb:
      "Coming soon",
    imageSrc: "/images/offTheClock/pickleballImage.png",
    orientation: "landscape",
  },
  {
    id: "misc-01",
    date: "Dec 2025",
    category: "Currently Into",
    title: "Dora, The Ideal World. Blind Boxes",
    blurb:
      "Thes highly detailed blind boxes are a fun way to collect.ite, with its unique designs and vibrant colors.",
    imageSrc: "/images/offTheClock/doraPrideImage.png",
    orientation: "portrait",
  },
];

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
          return (
            <article
              key={entry.id}
              className="py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Image */}
              <div
                className={`relative ${
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
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-[10px] text-cream/90 uppercase tracking-widest">
                  {entry.date}
                </div>
              </div>

              {/* Text */}
              <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-3">
                  {entry.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif italic text-cream mb-5 leading-tight">
                  {entry.title}
                </h2>
                <p className="text-cream/80 font-light leading-relaxed max-w-md">
                  {entry.blurb}
                </p>
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
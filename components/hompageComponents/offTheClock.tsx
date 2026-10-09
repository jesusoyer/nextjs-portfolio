import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Hobby = {
  id: string;
  name: string;
  blurb: string;
  image: string;
};

// Add/replace with your real hobbies and photos.
const hobbies: Hobby[] = [
  {
    id: "pickleball",
    name: "Pickleball",
    blurb: "Slowly climbing the kingdom rankings, one rally at a time.",
    image: "/images/offTheClock/pickleballImage.png",
  },
  {
    id: "reading",
    name: "Reading",
    blurb: "Who doesn't like reading books?.",
    image: "/images/offTheClock/bookshelf_image_2.png",
  },
  {
    id: "hiking",
    name: "Hiking",
    blurb: "Austin trails on the weekends, weather permitting.",
    image: "/images/offTheClock/hikingImage.png",
  },
  {
    id: "Currently Into",
    name: "Currently Into",
    blurb: "Find out why I enjoy collecting blind boxes, and what makes them so fun.",
    image: "/images/offTheClock/doraPrideImage.png",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function HomepageOffTheClock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + hobbies.length) % hobbies.length);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const active = hobbies[activeIndex];

  return (
    <section className="relative bg-cream py-24 px-6">
      {/* Pinstripe divider */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-ink" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-16 border-b border-ink/10 pb-6">
          <h3 className="text-2xl font-light text-burgundy tracking-wide">
            Off the Clock
          </h3>
          <Link
            href="/off-the-clock"
            className="text-xs uppercase tracking-[0.2em] text-burgundy hover:text-ink transition-colors"
          >
            View More →
          </Link>
        </div>

        {/* Mini carousel */}
        <div
          className="text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-64 h-80 md:w-72 md:h-96 mx-auto mb-6 overflow-hidden">
            <Image
              key={active.id}
              src={active.image}
              alt={active.name}
              fill
              className="object-cover animate-fadeIn"
            />
          </div>

          <h4 className="font-serif italic text-2xl text-burgundy mb-2">
            {active.name}
          </h4>
          <p className="text-sm text-ink/60 font-light max-w-sm mx-auto mb-8">
            {active.blurb}
          </p>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3">
            {hobbies.map((hobby, i) => (
              <button
                key={hobby.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${hobby.name}`}
                aria-current={i === activeIndex}
                className={`h-[2px] transition-all ${
                  i === activeIndex
                    ? "w-8 bg-burgundy"
                    : "w-3 bg-burgundy/20 hover:bg-burgundy/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
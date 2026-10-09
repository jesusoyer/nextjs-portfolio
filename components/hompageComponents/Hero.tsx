import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  id: string;
  kicker: string;
  render: () => JSX.Element;
};

function CasualInfoSlide() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-cream mb-4 tracking-tight">
          Jesus
          <br />
          <span className="font-serif italic">Oyervides Jr.</span>
        </h1>

        <div className="h-px w-24 bg-cream/30 mb-6"></div>

        <p className="text-2xl md:text-3xl text-cream/70 font-light">
          Frontend Developer &amp; Digital Craftsman
        </p>
      </div>

      <div className="mb-12 bg-black/20 backdrop-blur-sm border border-cream/20 p-8">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-4">
          Artist Statement
        </div>
        <p className="text-lg text-cream/80 leading-relaxed font-light">
          A creator who transforms complex problems into elegant solutions.
          With <span className="text-cream">10+ years</span> of
          experience in the public sector and training from UT Austin, I
          craft web applications that bridge technology and human need.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="bg-black/20 backdrop-blur-sm border border-cream/20 p-4 text-center">
          <div className="text-3xl font-light text-ink mb-1">10+</div>
          <div className="text-xs uppercase tracking-widest text-cream/60">
            Years
          </div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm border border-cream/20 p-4 text-center">
          <div className="text-3xl font-light text-ink mb-1">8+</div>
          <div className="text-xs uppercase tracking-widest text-cream/60">
            Works
          </div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm border border-cream/20 p-4 text-center">
          <div className="text-3xl font-light text-ink mb-1">∞</div>
          <div className="text-xs uppercase tracking-widest text-cream/60">
            Ideas
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="px-8 py-4 bg-cream text-burgundy font-light uppercase tracking-wider text-sm hover:bg-white transition-all text-center"
        >
          Enter Gallery
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 border border-cream/50 text-cream font-light uppercase tracking-wider text-sm hover:bg-cream hover:text-burgundy transition-all text-center"
        >
          Contact
        </Link>
      </div>

      <div className="mt-8 text-cream/50 text-sm">
        <p className="tracking-widest uppercase">
          Available for New Opportunities
        </p>
      </div>
    </>
  );
}

function FeaturedProjectSlide() {
  return (
    <>
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-4">
          Featured Project
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-4 tracking-tight">
          Clerk&apos;s<br />
          <span className="font-serif italic">Corner</span>
        </h2>
        <div className="h-px w-24 bg-cream/30 mb-6"></div>
        <p className="text-lg text-cream/80 leading-relaxed font-light max-w-xl">
          A free suite of browser-based tools for court clerks and legal
          professionals — built by someone who worked as one. Everything
          runs client-side, so case data never leaves the user&apos;s
          device. Live now: a calculator suite for backtime credit, date
          adjustment, and age; plus a file-stamp formatter that learns a
          clerk&apos;s exact convention from one example.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="px-8 py-4 bg-cream text-burgundy font-light uppercase tracking-wider text-sm hover:bg-white transition-all text-center"
        >
          View Project
        </Link>
      </div>
    </>
  );
}

function FeaturedBlogSlide() {
  return (
    <>
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-4">
          From the Blog
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-4 tracking-tight">
          From Fear of Formulas to{" "}
          <span className="font-serif italic">Excel Confidence</span>
        </h2>
        <div className="h-px w-24 bg-cream/30 mb-6"></div>
        <p className="text-lg text-cream/80 leading-relaxed font-light max-w-xl">
          My experience with Kyle Pew&apos;s Microsoft Excel – Excel from
          Beginner to Advanced course on Udemy.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/blog"
          className="px-8 py-4 bg-cream text-burgundy font-light uppercase tracking-wider text-sm hover:bg-white transition-all text-center"
        >
          Read the Article
        </Link>
      </div>
    </>
  );
}

// Edit this object to change the featured book.
const featuredBook = {
  title: "The Social Animal",
  author: "David Brooks",
  blurb:
    "The book that changed the course of my understanding of human behavior. Helping me unlock into my own potential.",
};

function FeaturedBookSlide() {
  return (
    <>
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-4">
          Book Recommendation
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-cream mb-3 tracking-tight">
          <span className="font-serif italic">{featuredBook.title}</span>
        </h2>
        <p className="text-sm uppercase tracking-widest text-cream/60 mb-4">
          by {featuredBook.author}
        </p>
        <div className="h-px w-24 bg-cream/30 mb-6"></div>
        <p className="text-lg text-cream/80 leading-relaxed font-light max-w-xl">
          {featuredBook.blurb}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/books"
          className="px-8 py-4 bg-cream text-burgundy font-light uppercase tracking-wider text-sm hover:bg-white transition-all text-center"
        >
          See the Shelf
        </Link>
      </div>
    </>
  );
}

const slides: Slide[] = [
  { id: "casual", kicker: "Intro", render: CasualInfoSlide },
  { id: "project", kicker: "Work", render: FeaturedProjectSlide },
  { id: "blog", kicker: "Writing", render: FeaturedBlogSlide },
  { id: "books", kicker: "Reading", render: FeaturedBookSlide },
];

const backgroundImageBySlide: Record<string, string> = {
  casual: "/images/profileImages/aztecMexicanImage.jpg",
  blog: "/images/blogImages/excel_course_image.png",
  books: "/images/bookImages/TheSocialAnimal.jpg",
};

// Which part of each image stays visible when it's cropped to fit.
const objectPositionBySlide: Record<string, string> = {
  casual: "left 10%",
  blog: "center top",
  books: "center",
};

const AUTO_ADVANCE_MS = 7000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const ActiveSlide = slides[activeIndex].render;

  return (
    <section
      className="relative min-h-screen flex items-center bg-burgundy"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image / Video - Left Side */}
      <div className="absolute inset-0 md:w-1/2">
        {slides[activeIndex].id === "project" ? (
          <video
            key="project-video"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          >
            <source src="/videos/clerks_corner_video.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            key={backgroundImageBySlide[slides[activeIndex].id]}
            src={backgroundImageBySlide[slides[activeIndex].id]}
            alt="Jesus Oyervides Jr"
            fill
            style={{
              objectFit: "cover",
              objectPosition: objectPositionBySlide[slides[activeIndex].id],
            }}
            className="opacity-90"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-burgundy/15 to-burgundy"></div>
      </div>

      {/* Content - Right Side Overlaying */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-end">
          <div className="w-full md:w-1/2 md:pl-12">
            {/* Slide indicator / kicker row */}
            <div className="flex items-center gap-3 mb-6">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${slide.kicker} slide`}
                  aria-current={i === activeIndex}
                  className={`h-[2px] transition-all ${
                    i === activeIndex
                      ? "w-10 bg-cream"
                      : "w-4 bg-cream/30 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>

            <div key={slides[activeIndex].id} className="animate-fadeIn">
              <ActiveSlide />
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center border border-cream/30 text-cream/60 hover:text-cream hover:border-cream transition-all"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center border border-cream/30 text-cream/60 hover:text-cream hover:border-cream transition-all"
      >
        ›
      </button>
    </section>
  );
}
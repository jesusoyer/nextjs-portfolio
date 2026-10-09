import { useEffect, useState } from "react";

type Article = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // e.g. "February 8, 2026"
  image?: string; // only the featured article needs one
  body: string[]; // paragraphs
};

// First article in the array is always the featured one.
const articles: Article[] = [
  {
    id: "featured-01",
    category: "Tech",
    title: "The course that I would recommend to anyone who wants to learn Excel",
    excerpt:
      "A short piece on the course that I would recommend to anyone who wants to learn Excel.",
    author: "Jesus Oyervides Jr.",
    date: "February 8, 2026",
    image: "/images/blogImages/excel_course_image.png",
    body: [
      "This is the opening paragraph of your featured article — replace it with your real writing. The first letter here gets the drop-cap treatment automatically, so lead with something you like.",
      "Second paragraph. Keep going as long as the piece needs — the modal scrolls, so there's no length limit here.",
      "Close it out however you'd like. This whole body array is just a list of paragraphs; add or remove as needed.",
    ],
  },
  {
    id: "article-02",
    category: "Career",
    title: "What Ten Years in Court Clerking Actually Taught Me (Coming soon)",
    excerpt:
      "A short piece on workflow, patience, and the small inefficiencies nobody else seemed to notice.",
    author: "Jesus Oyervides Jr.",
    date: "February 3, 2026",
    body: [
      "Replace this with your real article body.",
      "Add as many paragraphs as you want.",
    ],
  },
  {
    id: "article-03",
    category: "Reading",
    title: "The Book That Changed How I Read Everything Else (Coming soon)",
    excerpt:
      "On the one title that quietly reset the bar for what a good sentence should do.",
    author: "Jesus Oyervides Jr.",
    date: "January 27, 2026",
    body: [
      "Replace this with your real article body.",
      "Add as many paragraphs as you want.",
    ],
  },
  {
    id: "article-04",
    category: "Personal",
    title: "Off the Clock, On the Court (Coming soon)",
    excerpt:
      "Pickleball, patience, and why the sport snuck up on me the way it seems to sneak up on everyone.",
    author: "Jesus Oyervides Jr.",
    date: "January 19, 2026",
    body: [
      "Replace this with your real article body.",
      "Add as many paragraphs as you want.",
    ],
  },
];

export default function Blog() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    if (!openArticle) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenArticle(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openArticle]);

  const [featured, ...rest] = articles;

  return (
    <main className="bg-cream min-h-screen">
      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center border-b-4 border-double border-ink/20">
        <div className="text-xs uppercase tracking-[0.4em] text-ink/50 mb-3">
          {today || "\u00A0"}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-burgundy tracking-tight mb-3">
          The Oyervides Dispatch
        </h1>
        <p className="text-ink/50 font-light italic text-sm">
          Dispatches on code, clerking, and everything off the clock.
        </p>
      </div>

      {/* Front page grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Featured article */}
        <div className="lg:col-span-2">
          {featured.image && (
            <div className="relative aspect-[16/9] border border-ink/10 mb-6 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="text-xs uppercase tracking-[0.3em] text-burgundy/70 mb-3">
            {featured.category}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy leading-tight mb-4">
            {featured.title}
          </h2>
          <p className="text-ink/70 font-light leading-relaxed mb-4 max-w-2xl">
            {featured.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-ink/40 uppercase tracking-widest mb-5">
            <span>{featured.author}</span>
            <span>•</span>
            <span>{featured.date}</span>
          </div>
          <button
            onClick={() => setOpenArticle(featured)}
            className="text-sm uppercase tracking-widest text-burgundy hover:text-ink transition-colors border-b border-burgundy/40 hover:border-ink pb-0.5"
          >
            Continue Reading →
          </button>
        </div>

        {/* Secondary column */}
        <div className="lg:border-l lg:border-ink/10 lg:pl-10 divide-y divide-ink/10">
          {rest.map((article) => (
            <div key={article.id} className="py-6 first:pt-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-burgundy/70 mb-2">
                {article.category}
              </div>
              <h3 className="text-xl font-serif text-burgundy leading-snug mb-2">
                {article.title}
              </h3>
              <p className="text-ink/60 font-light text-sm leading-relaxed mb-3 line-clamp-3">
                {article.excerpt}
              </p>
              <button
                onClick={() => setOpenArticle(article)}
                className="text-xs uppercase tracking-widest text-burgundy hover:text-ink transition-colors"
              >
                Continue Reading →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Article modal */}
      {openArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenArticle(null)}
          />

          <div className="relative bg-white border border-ink/10 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12">
            <button
              onClick={() => setOpenArticle(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink/40 hover:text-burgundy transition-colors text-sm uppercase tracking-widest"
            >
              Close
            </button>

            <div className="text-xs uppercase tracking-[0.3em] text-burgundy/70 mb-3">
              {openArticle.category}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-burgundy leading-tight mb-4">
              {openArticle.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-ink/40 uppercase tracking-widest mb-8 pb-8 border-b border-ink/10">
              <span>{openArticle.author}</span>
              <span>•</span>
              <span>{openArticle.date}</span>
            </div>

            <div className="space-y-5">
              {openArticle.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-ink/70 font-light leading-relaxed ${
                    i === 0
                      ? "first-letter:text-6xl first-letter:font-serif first-letter:text-burgundy first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
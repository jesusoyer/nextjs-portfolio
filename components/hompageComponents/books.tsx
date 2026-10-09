import Image from "next/image";
import Link from "next/link";

type FeaturedBook = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

// Swap in your real featured picks and cover images.
const featuredBooks: FeaturedBook[] = [
  {
    id: "pachinko",
    title: "Pachinko",
    author: "Min Jin Lee",
    cover: "/images/bookImages/pachinkoImage.png",
  },
  {
    id: "blood-meridian",
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    cover: "/images/bookImages/bloodMeridianImage.png",
  },
  {
    id: "crying-in-h-mart",
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    cover: "/images/bookImages/cryingInHMartImage.png",
  },
  {
    id: "yolk",
    title: "Yolk",
    author: "Mary H. K. Choi",
    cover: "/images/bookImages/yolkImage.png",
  },
];

export default function HomepageBooks() {
  return (
    <section className="relative bg-burgundy py-24 px-6">
      {/* Pinstripe divider */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-ink" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-16 border-b border-cream/20 pb-6">
          <h3 className="text-2xl font-light text-cream tracking-wide">
            Books
          </h3>
          <Link
            href="/books"
            className="text-xs uppercase tracking-[0.2em] text-cream hover:text-ink transition-colors"
          >
            View More →
          </Link>
        </div>

        {/* Shelf */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-end">
          {featuredBooks.map((book) => (
            <Link
              key={book.id}
              href="/books"
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[2/3] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="mt-4 text-sm font-serif italic text-cream text-center leading-snug">
                {book.title}
              </h4>
              <p className="text-xs text-cream/50 text-center mt-1">
                {book.author}
              </p>
            </Link>
          ))}
        </div>

        {/* Shelf ledge */}
        <div className="h-[3px] bg-ink/40 mt-4 shadow-[0_6px_10px_-4px_rgba(0,0,0,0.4)]" />
      </div>
    </section>
  );
}
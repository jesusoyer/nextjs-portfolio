import { useEffect, useState } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  spineColor: string; // hex
  rating: number; // 1-5
  review: string;
  goodreadsUrl: string;
};

// Add books here — flat list, no need to manually organize into shelves.
const books: Book[] = [
  {
    id: "blood-meridian",
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    spineColor: "#7a1f1f",
    rating: 5,
    review:
      "Brutal and beautiful in equal measure. McCarthy's prose does something to your brain — replace with your actual take.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "pachinko",
    title: "Pachinko",
    author: "Min Jin Lee",
    spineColor: "#1f3a5f",
    rating: 5,
    review:
      "A generational story that never loses its footing. Swap this in for your real review.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    spineColor: "#111111",
    rating: 4,
    review: "Still holds up. Replace with your actual thoughts.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "da-vinci-code",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    spineColor: "#2b2b2b",
    rating: 3,
    review: "Fast, fun, forgettable in the best way. Replace with your take.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "crying-in-h-mart",
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    spineColor: "#8c2f39",
    rating: 5,
    review: "Gutting in the best way. Replace with your real review.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "yolk",
    title: "Yolk",
    author: "Mary H. K. Choi",
    spineColor: "#e8c547",
    rating: 4,
    review: "Sharp and messy in a way that feels honest. Your take here.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "coldest-winter",
    title: "The Coldest Winter",
    author: "David Halberstam",
    spineColor: "#3d3d3d",
    rating: 4,
    review: "Dense but worth it. Replace with your actual review.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "guns-germs-steel",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    spineColor: "#4a5d3a",
    rating: 4,
    review: "Reframed how I think about a lot of history. Your take here.",
    goodreadsUrl: "https://www.goodreads.com/",
  },
];

// Books get grouped into shelves of this many, in order.
const SHELF_SIZE = 8;

// Slight height variation so the shelf doesn't look like a uniform grid.
const heightClasses = ["h-56", "h-60", "h-52", "h-64", "h-58"];

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

export default function BookRecsAndRev() {
  const [pulledId, setPulledId] = useState<string | null>(null);
  const [modalBook, setModalBook] = useState<Book | null>(null);

  const shelves = chunk(books, SHELF_SIZE);

  const handleBookClick = (book: Book) => {
    setPulledId(book.id);
    // Let the pull animation play before the modal appears.
    window.setTimeout(() => setModalBook(book), 220);
  };

  const closeModal = () => {
    setModalBook(null);
    setPulledId(null);
  };

  // Close on Escape.
  useEffect(() => {
    if (!modalBook) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalBook]);

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-burgundy/70 mb-4">
          On the Shelf
        </div>
        <h1 className="text-5xl md:text-6xl font-light text-burgundy tracking-tight mb-6">
          Book <span className="font-serif italic">recommendations.</span>
        </h1>
        <div className="h-px w-16 bg-ink/20 mb-6" />
        <p className="text-ink/70 font-light leading-relaxed max-w-xl">
          Pull a spine to read the review. Full library lives on Goodreads.
        </p>
      </div>

      {/* Shelves */}
      <div className="max-w-5xl mx-auto px-6 pb-28 space-y-16">
        {shelves.map((shelfBooks, shelfIndex) => (
          <div key={shelfIndex}>
            {/* Books standing on the shelf */}
            <div className="flex items-end gap-1.5 overflow-x-auto pb-1">
              {shelfBooks.map((book, i) => {
                const isPulled = pulledId === book.id;
                return (
                  <button
                    key={book.id}
                    onClick={() => handleBookClick(book)}
                    aria-label={`Open review for ${book.title}`}
                    className={`relative flex-shrink-0 w-10 sm:w-12 ${
                      heightClasses[i % heightClasses.length]
                    } transition-transform duration-200 ease-out origin-bottom ${
                      isPulled
                        ? "-translate-y-6 rotate-1 shadow-2xl z-20"
                        : "hover:-translate-y-2 hover:shadow-lg"
                    }`}
                    style={{ backgroundColor: book.spineColor }}
                  >
                    <span
                      className="absolute inset-0 flex items-center justify-center px-1 py-3 text-[11px] tracking-wide text-white/90 font-light [writing-mode:vertical-rl] rotate-180 truncate"
                      style={{ textOrientation: "mixed" }}
                    >
                      {book.title}
                    </span>
                    {/* subtle spine highlight for depth */}
                    <span className="absolute inset-y-0 left-0 w-px bg-white/10" />
                    <span className="absolute inset-y-0 right-0 w-px bg-black/30" />
                  </button>
                );
              })}
            </div>

            {/* Shelf board */}
            <div className="h-3 bg-gradient-to-b from-[#4a3626] to-[#2b1d14] shadow-[0_8px_12px_-6px_rgba(0,0,0,0.6)]" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Card */}
          <div className="relative bg-cream border border-ink/10 max-w-md w-full p-8">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink/40 hover:text-burgundy transition-colors text-sm uppercase tracking-widest"
            >
              Close
            </button>

            <div className="text-xs uppercase tracking-[0.3em] text-burgundy/70 mb-3">
              {modalBook.author}
            </div>
            <h2 className="text-3xl font-serif italic text-burgundy mb-3 leading-tight">
              {modalBook.title}
            </h2>
            <div className="text-ink/40 text-sm mb-6">
              {"★".repeat(modalBook.rating)}
              {"☆".repeat(5 - modalBook.rating)}
            </div>
            <p className="text-ink/70 font-light leading-relaxed mb-8">
              {modalBook.review}
            </p>

            <a
              href={modalBook.goodreadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-ink/30 text-ink hover:bg-burgundy hover:text-cream hover:border-burgundy transition-all font-light tracking-wider text-xs uppercase"
            >
              View on Goodreads
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
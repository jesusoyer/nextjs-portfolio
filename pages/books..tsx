import { useEffect, useState } from "react";
import Image from "next/image";

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string; // path in /public, e.g. "/images/bookImages/Pachinko.jpg"
  spineColor: string; // hex, used as the fallback cover color until the image exists
  rating: number; // 1-5
  review: string;
  goodreadsUrl: string;
};

// Add books here — flat list, shelves are built automatically.
const books: Book[] = [
  {
    id: "social-animal",
    title: "The Social Animal",
    author: "David Brooks",
    cover: "/images/bookImages/TheSocialAnimal.jpg",
    spineColor: "#b3282d",
    rating: 4,
    review: "Review Coming soon",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "blood-meridian",
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    cover: "/images/bookImages/bloodMeridianImage.png",
    spineColor: "#7a1f1f",
    rating: 5,
    review:
     "Review Coming soon",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  {
    id: "pachinko",
    title: "Pachinko",
    author: "Min Jin Lee",
    cover: "/images/bookImages/pachinkoImage.png",
    spineColor: "#1f3a5f",
    rating: 5,
    review:
      "Review Coming soon",
    goodreadsUrl: "https://www.goodreads.com/",
  },
   {
    id: "crying-in-h-mart",
    title: "Crying in H Mart",
    author: "Michelle Zauner",
    cover: "/images/bookImages/cryingInHmartImage.png",
    spineColor: "#8c2f39",
    rating: 5,
    review: "Review Coming soon",
    goodreadsUrl: "https://www.goodreads.com/",
  },
    {
    id: "yolk",
    title: "Yolk",
    author: "Mary H. K. Choi",
    cover: "/images/bookImages/yolkImage.png",
    spineColor: "#c9a227",
    rating: 4,
    review: "Review Coming soon",
    goodreadsUrl: "https://www.goodreads.com/",
  },
  // {
  //   id: "1984",
  //   title: "Coming Soon",
  //   author: "TBD",
  //   cover: "/images/bookImages/1984.jpg",
  //   spineColor: "#111111",
  //   rating: 4,
  //   review: "Still holds up. Replace with your actual thoughts.",
  //   goodreadsUrl: "https://www.goodreads.com/",
  // },
  // {
  //   id: "da-vinci-code",
  //   title: "The Da Vinci Code",
  //   author: "Dan Brown",
  //   cover: "/images/bookImages/TheDaVinciCode.jpg",
  //   spineColor: "#2b2b2b",
  //   rating: 3,
  //   review: "Fast, fun, forgettable in the best way. Replace with your take.",
  //   goodreadsUrl: "https://www.goodreads.com/",
  // },
 
  // {
  //   id: "coldest-winter",
  //   title: "The Coldest Winter",
  //   author: "David Halberstam",
  //   cover: "/images/bookImages/TheColdestWinter.jpg",
  //   spineColor: "#3d3d3d",
  //   rating: 4,
  //   review: "Dense but worth it. Replace with your actual review.",
  //   goodreadsUrl: "https://www.goodreads.com/",
  // },
  // {
  //   id: "guns-germs-steel",
  //   title: "Guns, Germs, and Steel",
  //   author: "Jared Diamond",
  //   cover: "/images/bookImages/GunsGermsAndSteel.jpg",
  //   spineColor: "#4a5d3a",
  //   rating: 4,
  //   review: "Reframed how I think about a lot of history. Your take here.",
  //   goodreadsUrl: "https://www.goodreads.com/",
  // },
];

// How many books sit on each shelf. This one number controls the row layout.
const SHELF_SIZE = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

// Cover image with a fallback: if the image file doesn't exist yet,
// it shows a colored cover with the title instead of a broken image.
function BookCover({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative aspect-[2/3] w-full overflow-hidden"
      style={{ backgroundColor: book.spineColor }}
    >
      {!failed && (
        <Image
          src={book.cover}
          alt={`${book.title} cover`}
          fill
          sizes="(min-width: 768px) 260px, 33vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
          <span className="font-serif italic text-white/90 text-sm sm:text-lg leading-snug">
            {book.title}
          </span>
          <span className="mt-2 text-[10px] uppercase tracking-widest text-white/60">
            {book.author}
          </span>
        </div>
      )}

      {/* Spine crease along the left edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/30 to-transparent" />
    </div>
  );
}

export default function BookRecsAndRev() {
  const [pulledId, setPulledId] = useState<string | null>(null);
  const [modalBook, setModalBook] = useState<Book | null>(null);

  const shelves = chunk(books, SHELF_SIZE);

  const handleBookClick = (book: Book) => {
    setPulledId(book.id);
    // Let the pull-off-the-shelf animation play before the modal appears.
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
          Pick a book off the shelf to read the review. Full library lives on
          Goodreads.
        </p>
      </div>

      {/* Bookcase */}
      <div className="max-w-4xl mx-auto px-6 pb-28">
        <div className="border-x-[10px] border-t-[10px] border-[#3b2a1d] bg-[#e9e2d6] shadow-2xl">
          {shelves.map((shelfBooks, shelfIndex) => (
            <div key={shelfIndex}>
              {/* Books standing on the shelf */}
              <div
                className="grid items-end gap-4 sm:gap-8 px-4 sm:px-10 pt-8 shadow-[inset_0_14px_18px_-14px_rgba(0,0,0,0.35)]"
                style={{
                  gridTemplateColumns: `repeat(${SHELF_SIZE}, minmax(0, 1fr))`,
                }}
              >
                {shelfBooks.map((book) => {
                  const isPulled = pulledId === book.id;
                  return (
                    <button
                      key={book.id}
                      onClick={() => handleBookClick(book)}
                      aria-label={`Open review for ${book.title}`}
                      title={book.title}
                      className={`block w-full origin-bottom shadow-[4px_8px_14px_-4px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out ${
                        isPulled
                          ? "-translate-y-4 scale-105 rotate-1 z-20"
                          : "hover:-translate-y-2"
                      }`}
                    >
                      <BookCover book={book} />
                    </button>
                  );
                })}
              </div>

              {/* Shelf board */}
              <div className="h-4 bg-gradient-to-b from-[#6b4a31] to-[#3b2a1d] shadow-[0_10px_14px_-6px_rgba(0,0,0,0.55)]" />
            </div>
          ))}
        </div>
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
          <div className="relative bg-cream border border-ink/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 flex flex-col sm:flex-row gap-8">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink/40 hover:text-burgundy transition-colors text-sm uppercase tracking-widest"
            >
              Close
            </button>

            <div className="w-36 sm:w-44 flex-shrink-0 mx-auto sm:mx-0 shadow-[6px_10px_20px_-6px_rgba(0,0,0,0.5)]">
              <BookCover book={modalBook} />
            </div>

            <div className="flex-1 sm:pt-4">
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
        </div>
      )}
    </main>
  );
}
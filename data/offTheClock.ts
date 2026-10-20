export type Entry = {
  id: string;
  slug: string; // used in the URL: /off-the-clock/<slug>
  date: string; // e.g. "Feb 2026"
  category: string; // e.g. "Reading", "Pickleball", "Cooking"
  title: string;
  blurb: string;
  imageSrc: string; // TODO: replace with real image paths in /public/images/offTheClock/
  orientation: "portrait" | "landscape";
  body?: string[]; // article paragraphs. Entries without a body aren't clickable.
  link?: { label: string; href: string }; // optional link shown at the end of the article
  images?: string[]; // optional extra photos. If set, the article page shows a carousel of these instead of imageSrc.
};

// Add new posts here — newest first. Each one becomes a section on the list page.
export const entries: Entry[] = [
  {
    id: "reading-01",
    slug: "kpop-stans-who-read",
    date: "Oct 2026",
    category: "Bookclub",
    title: "Kpop Stans who Read",
    blurb:
      "",
    imageSrc: "/images/bookclubImages/molka.png",
    orientation: "portrait",
    body: [
    "Back in 2018, I discovered K-pop, and it happened quite unexpectedly. I had watched a music video by BTS, and while it didn't initially catch my interest, the YouTube algorithm had other plans for me.",

    "It recommended a 30-second teaser for a song titled \"Yes or Yes\" by a group called TWICE. I remember spending the next two weeks revisiting that teaser over and over again, eagerly waiting for the full song to be released. Finally, the day arrived, and I was hooked!",

    "I fell in love with K-pop, and that newfound passion eventually introduced me to an amazing community of fans who shared my enthusiasm. I became involved in the community, where I met incredibly welcoming and friendly people who made the experience even more enjoyable.",

    "But how did my love for K-pop turn into a book club?",

    "It all started when I picked up Crying in H Mart by Michelle Zauner. I was blown away by how powerful and moving the book was. I wanted to share that experience with others, so I reached out to the K-pop community and asked if anyone would be interested in reading the book and then meeting at H Mart to discuss it.",

    "To my surprise, there was enough interest to make it happen! Although we didn't end up meeting at H Mart as originally planned, we held our very first book club meeting.",

    "What I hadn't anticipated was what happened afterward. At the end of our meeting, attendees began asking, \"What are we reading next?\"",

    "And just like that, our book club was born!",

    "Now, we're in our second year and still going strong. Our book club focuses on literature written by Korean and Korean American authors, giving us an opportunity to explore different perspectives, experiences, and stories through reading.",

    "As K-pop fans, we want to do more than simply enjoy the music. We want to be respectful and thoughtful members of the community by learning more about Korean culture, history, and the experiences of Korean and Korean American people.",

    "Over the past two years, we've read some incredible books, had meaningful discussions, and learned so much from one another. What began as a simple idea has grown into a wonderful community of readers brought together by a shared love of K-pop and literature.",

    "If you're interested in joining our community, we'd love to have you!",
    ],
    link: {
      label: "Join K-Pop Dance Austin on Meetup",
      href: "https://www.meetup.com/k-pop-dance-austin/",
    },
  },
  {
    id: "pickleball-01",
    slug: "pickleball",
    date: "Jan 2026",
    category: "Pickleball",
    title: "Coming Soon",
    blurb:
      "Coming soon",
    imageSrc: "/images/offTheClock/pickleballImage.png",
    orientation: "landscape",
    // No body yet, so this entry isn't clickable. Add one to turn the link on.
  },
  {
    id: "misc-01",
    slug: "dora-the-ideal-world-blind-boxes",
    date: "Dec 2025",
    category: "Currently Into",
    title: "Dora, The Ideal World. Blind Boxes",
    blurb:
      "Thes highly detailed blind boxes are a fun way to collect.ite, with its unique designs and vibrant colors.",
    imageSrc: "/images/offTheClock/doraPrideImage.png",
    orientation: "portrait",
    body: [
      "Replace this with your article. Each string in this list becomes one paragraph.",
      "Add as many paragraphs as you want.",
    ],
  },
];
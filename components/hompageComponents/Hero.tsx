import Image from "next/image";
import meImage from "./bridgePic.jpeg"
import Link from 'next/link';

export default function Hero() {
    return (
      <section className="relative h-[80vh] border border-b-8 border-palette2">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={meImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          className="absolute inset-0 w-full h-full"
        />
        <div className="bg-black opacity-20 w-full h-full absolute inset-0"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-start items-center pt-20 text-palette5 text-center">
        {/* Centered Image */}
        <div className="relative z-10">
          <Image
            src="/personalLogo3.png"
            alt="Centered Image"
            width={100} // Adjust width as needed
            height={200} // Adjust height as needed
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="max-w-3xl mx-auto px-8 text-center text-palette5">
    <p className="text-lg leading-relaxed">
      Hi, I’m Jesus Oyervides Jr., a frontend web developer and graduate of the University of Austin's Full Stack Bootcamp. I love building user-friendly interfaces, tackling challenges, and continuously growing. Outside of coding, I enjoy hiking, board games, and running a book club. I also volunteer for nonprofits, redesigning their websites. This portfolio, built with Next.js, showcases my skills—feel free to explore and reach out!
    </p>
  </div>

      </div>
    </section>

    )
  }
import Image from "next/image";
import meImage from "../public/bridgePic.jpeg"
import Link from 'next/link';

export default function Hero() {
    return (
      <section className="relative h-screen mb-10">
      <div className="absolute inset-0">
        <Image
          src={meImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 w-full h-full"
        />
        <div className="bg-black opacity-20 w-full h-full absolute inset-0"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-start items-center pt-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-10">Welcome to my portfolio!</h1>
        <p className="text-lg max-w-lg px-6">
          My name is Jesus Oyervides jr. I'm a front-end web developer, a proud graduate of the University of Austin's Full Stack Development Bootcamp. Passionate about crafting user-friendly experiences, I thrive on challenges, always seeking opportunities for growth. Beyond coding, I love hiking, strategic board games, and exploring new ventures. A voracious reader, I delve into books across various topics, constantly expanding my horizons.
        </p>
      </div>
    </section>

    )
  }
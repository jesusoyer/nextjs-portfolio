import Image from "next/image";
import meImage from "../public/bobaPic.jpeg"
import Link from 'next/link';

export default function homepage() {
    return (
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
          <h1 className="block mb-2 dark:text-violet-400 text-5xl font-extrabold">
            Welcome to my portfolio!</h1>
          <p className="font-extrabold text-left">My name is Jesus Oyervides jr I'm a front-end web developer. a proud graduate of the University of Austin's Full Stack Development Bootcamp. Passionate about crafting user-friendly experiences, I thrive on challenges, always seeking opportunities for growth. Beyond coding, I love hiking, strategic board games, and exploring new ventures. A voracious reader, I delve into books across various topics, constantly expanding my horizons.</p>
          <p className="my-8">
            <span className="text-2xl font-medium dark:text-gray-50">Checkout my </span>
            <Link href="/projects" className="text-2xl font-medium underline"> Projects.
            </Link>
          </p>
          
        </div>
        <Image src={meImage} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />


      </div>
    </section>
    )
  }
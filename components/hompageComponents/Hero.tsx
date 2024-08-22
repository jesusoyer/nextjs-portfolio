import Image from "next/image";
import meImage from "./bridgePic.jpeg"
import Link from 'next/link';

export default function Hero() {
    return (
      <section className="relative h-[80vh] border border-b-8 border-palette2">
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
      <div className="absolute inset-0 flex flex-col justify-start items-center pt-20 text-palette5 text-center">
     
      
      </div>
    </section>

    )
  }
import React from 'react'
import Image from "next/image";
import ProfileImage from "../public/FullSizeRender (3).jpeg";
import HeroBackgroundImage from "../public/linked in background.jpeg";

const ContactPageHero = () => {
  return (

<div className="relative">
  {/* Background Image */}
  <Image src={HeroBackgroundImage} alt="sunset Image" className="w-full h-auto" />

  {/* Circular Profile Picture */}
  <div className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="rounded-full overflow-hidden w-48 h-48 bg-gray-300">
    <Image src={ProfileImage} alt="Jesus Image" className="w-full h-full object-cover" />
    </div>
  </div>
</div>




   

  )
}

export default ContactPageHero

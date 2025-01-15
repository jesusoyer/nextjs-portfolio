import React from 'react'
import Image from "next/image";
import FeaturedImage from "./Trucvietrevamp.png"
const intro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
    {/* Text Box */}
    <div className="text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">TRUC VIET WEBSITE REVAMP</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
      I volunteered with a nonprofit to revamp their outdated WordPress website. As the project lead, I spearheaded the creation of a new Squarespace site, designing the layout, migrating all content from the old site, and seamlessly connecting their existing domain to the new platform.
      </p>
    </div>
  
    {/* Image Box */}
    <div className="flex justify-center">
      <Image
        src={FeaturedImage}
        alt="Portfolio Preview"
        width={400}
        height={300}
        className="rounded-lg shadow-md object-cover"
      />
    </div>
  </section>
  )
}

export default intro;

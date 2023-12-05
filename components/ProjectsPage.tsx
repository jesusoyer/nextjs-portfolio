import Image from "next/image";
import Link from "next/link";

import ContructionImage from "../public/constructionImage.jpg";
export default function Homepage() {
  return (
    <div className="container my-20 mx-auto md:px-6">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-32 text-center lg:text-left">
        <h2 className="mb-12 text-center text-3xl font-bold">
          My projects page
        </h2>

        <div className="grid gap-x-6 gap-y-10 lg:grid-cols-3 lg:gap-x-12">
          <div
            className="mb-6 block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image src={ContructionImage} alt="construction image" className="w-full rounded-t-lg" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">Coming Soon</h5>
              <p className="mb-6 text-white">
                Within the cocoon of creativity, a project gestates, preparing
                to emerge as a testament to ingenuity and relentless pursuit of
                excellence. Every line of code, every concept, is a brushstroke
                in the tapestry of innovation. As the final threads are woven
                into this digital narrative, the air is charged with the energy
                of anticipation. This project is a manifestation of countless
                ideas, each pixel a carefully considered piece of a larger
                mosaic. The countdown to its revelation has begun, promising a
                glimpse into a realm where imagination meets execution. Soon,
                the veil will lift, and this labor of passion will step into the
                limelight, inviting the world to witness a symphony of
                creativity orchestrated into a harmonious whole. Stay tuned for
                the unveiling of something truly extraordinary, where pixels and
                purpose converge in a dance of technological artistry.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="mb-6 block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image src={ContructionImage} alt="construction image"  className="w-full rounded-t-lg" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">Coming Soon</h5>
              <p className="mb-6 text-white">
                Feel the pulse of anticipation as my upcoming project stirs in
                the realm of imagination, awaiting its moment in the spotlight.
                Like an artist preparing the final strokes on a canvas, I am
                meticulously refining every detail, weaving a narrative that
                transcends the ordinary. This project is not just a creation;
                it's an evolution, a convergence of inspiration and dedication.
                As the unveiling approaches, the excitement crescendos. Picture
                it as a symphony of innovation, harmonizing ideas into a
                composition that seeks to resonate with its audience. The stage
                is set, and soon the curtain will rise, revealing a culmination
                of passion and vision. Brace yourself for the revelation of
                something extraordinary, where pixels and ideas coalesce into a
                digital masterpiece. Stay tuned for the moment when this project
                steps into the limelight.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image src={ContructionImage} alt="construction image"  className="w-full rounded-t-lg" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">Coming Soon</h5>
              <p className="mb-6 text-white">
                In the quiet corridors of creation, my upcoming project awaits
                its moment to unfurl, like a story poised to be told. With every
                keystroke and design choice, it breathes life into a vision that
                transcends the ordinary. The meticulous crafting of code and
                concept is akin to the careful strokes of an artist’s brush.
                This project is a living canvas, a culmination of ideas
                converging into a digital symphony. As the finishing touches
                fall into place, the excitement intensifies, promising a
                revelation that blurs the lines between innovation and
                imagination. Soon, this endeavor will step into the spotlight,
                inviting the world to witness the fusion of pixels and purpose.
                Stay tuned for the unveiling, where a tapestry of creativity
                unfolds, and the boundaries of possibility are redefined.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image src={ContructionImage} alt="construction image"  className="w-full rounded-t-lg" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">Coming soon</h5>
              <p className="mb-6 text-white">
                Beneath the surface of anticipation lies my forthcoming project,
                a creation poised to transcend the boundaries of conventional
                imagination. Each line of code and pixel carefully curated
                represents a stroke in the canvas of innovation. Like a symphony
                nearing its crescendo, the project harmonizes ideas into a
                visual masterpiece. The final stages of meticulous crafting are
                underway, promising an unveiling that marries sophistication
                with creative audacity. As the curtain prepares to rise, the air
                is charged with the excitement of what's to come. This endeavor
                is more than just a project; it's a manifestation of passion and
                purpose. Soon, the world will witness the culmination of
                countless hours dedicated to a digital narrative that beckons
                exploration. Stay tuned for the revelation of something
                extraordinary, where creativity finds its form in the realm of
                digital possibilities.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image src={ContructionImage} alt="construction image"  className="w-full rounded-t-lg" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">Coming soon</h5>
              <p className="mb-6 text-white">
                In the depths of my creative crucible, a project takes shape, a
                convergence of ideas and innovation on the brink of unveiling.
                With every code snippet and design nuance, it evolves into a
                digital symphony, each element contributing to a harmonious
                composition. The canvas is nearly complete, a testament to
                relentless dedication and imaginative fervor. As the finishing
                touches align, the project becomes a living narrative, promising
                an immersive experience that blurs the lines between vision and
                execution. Picture it as the crescendo of anticipation, a
                culmination of countless hours invested in a tapestry of
                creativity. Soon, the veil will lift, revealing a creation that
                aspires to redefine the boundaries of what's possible. Stay
                tuned for the grand reveal, where pixels and purpose intertwine
                in a dance of technological artistry.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image src={ContructionImage} alt="construction image"  className="w-full rounded-t-lg" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="currentColor"
                  d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">Coming soon</h5>
              <p className="mb-6 text-white">
                In the crucible of creation, a project awaits its moment of
                revelation—a tapestry woven with meticulous code and inventive
                strokes. Each pixel and line of script adds a layer to this
                digital symphony, where innovation and imagination dance in
                unison. As the final notes are composed, the project emerges as
                a living testament to dedication and artistry. Feel the
                crescendo of anticipation as this endeavor readies itself to
                step into the spotlight, blurring the boundaries between concept
                and execution. It's more than a project; it's a manifestation of
                passion and relentless pursuit of excellence. Soon, the curtain
                will rise, inviting the world to witness the fusion of pixels
                and purpose. Stay tuned for the grand unveiling, where
                creativity takes center stage in the realm of endless
                possibilities.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
}

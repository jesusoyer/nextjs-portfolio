import comingSoon from "../public/comingSoon.jpg";
import Image from "next/image";
export default function HomeProjects() {
  return (
    <div className="container mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-10 text-center md:text-left">
        <div className="block rounded-lg bg-black text-white dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <Image
                src={comingSoon}
                alt="coming soon"
                className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl font-bold">
                  <span className="text-danger dark:text-danger-500">
                    "Coming soon"
                  </span>{" "}
                  project
                </h2>
                <p className="mb-6 pb-2 text-white dark:text-neutral-300">
                  In the cryptic recesses of my thoughts lies a yawning
                  emptiness, a cosmic void awaiting the eldritch emergence of a
                  cerebral creation. I, a mere mortal scribe, delve into the
                  abyss, weaving a tale that defies reason. Anticipate the
                  imminent birth of a phantasmal opus from the stygian depths of
                  my macabre musings.
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full bg-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
      <section className="mb-16 text-center md:text-left">
        <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl text-white font-bold">
                  <span className="text-white ">"coming soon"</span> project
                </h2>
                <p className="mb-6 pb-2 text-white dark:text-neutral-300">
                  In the quiet expanse of my thoughts, a sensation has ensnared
                  me, I believe, since that moment... ...that moment when
                  inspiration descended like stardust. It was almost as if...
                  ...as if it were a sequence from a reverie. Nothing grander,
                  nothing simpler... ...than a captivating vista.
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full bg-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <Image
                src={comingSoon}
                alt="coming soon"
                className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
      <section className="mb-16 text-center md:text-left">
        <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <Image
                src={comingSoon}
                alt="coming soon"
                className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl text-white font-bold">
                  <span className="text-white ">"coming soon"</span> project
                </h2>
                <p className="mb-6 pb-2 text-white dark:text-neutral-300">
                  Baby, if I give it my all, will it pay off? Working overtime,
                  no days off All these shooting stars in the dark All these
                  shooting stars in the dark Make a wish Taking
                  off from the ground, it's amazing So outta this world, I'm in
                  space, now I'm going up Headin' to the stars Wouldn't trade it
                  out for another life, no
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full bg-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

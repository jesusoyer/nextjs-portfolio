import Image from "next/image";
import Link from "next/link";
import hispanicHackers from "../public/HispanicHackers.png";
import TicTacToe from "../public/Tic tac toe image.png";

import ContructionImage from "../public/constructionImage.jpg";
export default function Homepage() {
  return (
    <div className="container my-20 mx-auto md:px-6">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-32 text-center lg:text-left">
        <h2 className="mb-12 text-center text-3xl font-bold">
          My projects page
        </h2>

        <div className="grid gap-x-6 gap-y-5 lg:grid-cols-3 lg:gap-x-12">
        <div className="mb-6 lg:mb-0 bg-black rounded-lg" >
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <Image src={hispanicHackers} alt="Hispanic Hackers Image" className="w-full rounded-t-lg" />
    <a href="#!">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-opacity-20"></div>
    </a>
    <svg className="absolute left-0 bottom-0 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="black" d="M0,288L1440,288L1440,320L0,320Z"></path>
    </svg>
  </div>
  <div className="p-6">
    <h5 className="mb-4 text-lg text-white font-bold">Hispanic Hackers</h5>
    <p className="mb-6 text-white">I volunteered to help revamp the website for the local Hispanic Hackers nonprofit. They made the switch from React JS to Next JS for their website. I teamed up with four awesome individuals, and my focus was the landing page. I built the layout from the ground up, adding in some cool conditional rendering inspired by a Figma design. Check out the final product by clicking the link below!</p>
    <a href="https://www.hispanichackers.com/" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md">To Hispanic Hacker website</a>
  </div>
</div>

          <div className="mb-6 block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={TicTacToe}
                alt="Tic-Tac-Toe image"
                className="w-full rounded-t-lg"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                 <path fill="black" d="M0,288L1440,288L1440,320L0,320Z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h5 className="mb-4 text-lg text-white font-bold">
                React Tic-Tac-Toe
              </h5>
              <p className="mb-6 text-white">
                In this project, I learned to develop a tic-tac-toe game using
                React. Through the creation of modular components such as the
                Grid and MarkButton, I gained proficiency in managing state
                using React hooks like useState and useEffect. These components
                allowed for dynamic rendering of the game board and individual
                cells, facilitating player interactions such as marking cells
                and resetting the game. By implementing game logic to detect
                winning combinations, I honed my skills in handling complex
                conditional logic and managing game flow. Additionally, I
                incorporated Tailwind CSS for styling, enabling me to create
                visually appealing user interfaces with minimal effort. Overall,
                this project provided valuable experience in building
                interactive web applications with React, including state
                management, component composition, and user interface design.
                Through iterative development and problem-solving, I developed a
                deeper understanding of React fundamentals and gained practical
                insights into building functional and engaging web-based games.
              </p>
              <a
                href="https://main.dd8lletq4lb3y.amplifyapp.com/"
                target="_blank" rel="noopener noreferrer"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                To React Tik-Tac-Toe
              </a>
            </div>
          </div>

          <div className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={ContructionImage}
                alt="construction image"
                className="w-full rounded-t-lg"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                 <path fill="black" d="M0,288L1440,288L1440,320L0,320Z"></path>
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
              <Image
                src={ContructionImage}
                alt="construction image"
                className="w-full rounded-t-lg"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                 <path fill="black" d="M0,288L1440,288L1440,320L0,320Z"></path>
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
              <Image
                src={ContructionImage}
                alt="construction image"
                className="w-full rounded-t-lg"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                 <path fill="black" d="M0,288L1440,288L1440,320L0,320Z"></path>
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
              <Image
                src={ContructionImage}
                alt="construction image"
                className="w-full rounded-t-lg"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
              <svg
                className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                 <path fill="black" d="M0,288L1440,288L1440,320L0,320Z"></path>
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

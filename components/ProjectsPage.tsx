import Image from "next/image";
import Link from "next/link";
import hispanicHackers from "../public/HispanicHackers.png";
import TicTacToe from "../public/Tic tac toe image.png";
import investmentCalc from "../public/InvestmentCalc.png";
import timerGame from "../public/timerGame.png";

import ContructionImage from "../public/constructionImage.jpg";
export default function Homepage() {
  return (
    <div className="container my-20 mx-auto ">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-32 text-center lg:text-left">
        <h2 className="my-5 text-center text-3xl font-bold p-4">
          PROJECTS
        </h2>

        <div className="grid gap-x-6 gap-y-5 lg:grid-cols-3 lg:gap-x-12 shadow-outline ">
          <div className=" bg-gray-300 shadow-lg p-3">
            <Image
              src={hispanicHackers}
              alt="Hispanic Hackers Image"
              className="shadow-lg h-64 "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-black font-bold">
                Hispanic Hackers
              </h5>
              <p className="mb-6 text-black">
                I volunteered to help revamp the website for the local Hispanic
                Hackers nonprofit. They made the switch from React JS to Next JS
                for their website. I teamed up with four awesome individuals,
                and my focus was the landing page. I built the layout from the
                ground up, adding in some cool conditional rendering inspired by
                a Figma design. Check out the final product by clicking the link
                below!
              </p>
              <Link
                href="https://www.hispanichackers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To Hispanic Hacker website
              </Link>
            </div>
          </div>

          <div className="bg-gray-300 shadow-lg p-3">
            <Image
              src={TicTacToe}
              alt="Tic-Tac-Toe image"
              className=" h-64 shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-black font-bold">
                React Tic-Tac-Toe
              </h5>
              <p className="mb-6 text-black">
                I created a React tic-tac-toe game with modular components for
                the board and cells. State was managed using hooks like
                useState. I implemented game logic for wins and styled the UI
                with Tailwind CSS. This project offered hands-on experience in
                React, covering state, components, and UI.
              </p>
              <Link
                href="https://main.dd8lletq4lb3y.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                To React Tik-Tac-Toe
              </Link>
            </div>
          </div>

          <div className="bg-gray-300 shadow-lg p-3">
            <Image
              src={investmentCalc}
              alt="Investment Calculator image"
              className="h-64 shadow-lg"
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-black font-bold">
                Investment Calculator
              </h5>
              <p className="mb-6 text-black">
                I created a React app for investment return forecasting,
                considering parameters like initial and annual investments,
                return rates, and duration. User input is stored in state for
                calculations, and data is efficiently passed between components
                using props. JavaScript functions ensure precise computation and
                monitoring of returns.
              </p>
              <Link
                href="https://main.d1r08ii8kqipne.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                To Investment Calculator
              </Link>
            </div>
          </div>
          <div className="bg-gray-300 shadow-lg p-3">
            <Image
              src={timerGame}
              alt="Timer Game image"
              className="h-64 shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-black font-bold">Coming soon</h5>
              <p className="mb-6 text-black">
              I developed a React web game challenging players to stop a timer near zero. By strategically using React useRef and createPortal, I optimized performance, prevented component re-evaluation, and enhanced user experience with efficient DOM access and modal rendering.
              </p>
              <Link
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Button Disabled
              </Link>
            </div>
          </div>

          <div className="bg-gray-300 shadow-lg p-3">
            <Image
              src={ContructionImage}
              alt="construction image"
              className="h-64 shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-black font-bold">Coming soon</h5>
              <p className="mb-6 text-black">
              Chase your dreams relentlessly. Your potential is boundless, waiting to be unleashed. Embrace the journey, for every obstacle is a chance to grow stronger. You have the power to shape your destiny.
              </p>
              <a
                href="https://main.d24hig7yswwjx.amplifyapp.com/"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Button Disabled
              </a>
            </div>
          </div>

          <div className="bg-gray-300 shadow-lg p-3">
            <Image
              src={ContructionImage}
              alt="construction image"
              className="h-64 shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-black font-bold">Coming soon</h5>
              <p className="mb-6 text-black">
              Believe in yourself. Embrace challenges. Every setback is a step forward. Success is not the absence of failure but the persistence to overcome it. Your journey defines you. Keep pushing. You've got this.
              </p>
              <a
                href="#!"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Button Disabled
              </a>
            </div>
          </div>





         
          
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
}

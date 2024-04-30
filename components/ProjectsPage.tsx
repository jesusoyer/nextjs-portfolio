import Image from "next/image";
import Link from "next/link";
import hispanicHackers from "../public/HispanicHackers.png";
import TicTacToe from "../public/Tic tac toe image.png";
import investmentCalc from "../public/InvestmentCalc.png";
import timerGame from "../public/timerGame.png";
import storeRefactor from "../public/storerefactorimage.png";
import reduxPracImage from "../public/reduxPracImage.png";

export default function Projects() {
  return (
    <section className="bg-palette3 p-3">
      <h2 className="text-palette5 text-2xl p-5 ml-6">Other Projects...</h2>
    <div className="container   mx-auto ">
      {/* <!-- Section: Design Block --> */}
      <section className=" text-palette2 text-center lg:text-left">
        

        <div className="grid gap-x-6 gap-y-5 lg:grid-cols-3 lg:gap-x-12 shadow-outline p-4 ">
          <div className=" bg-palette2  shadow-lg p-3 rounded-md">
            <Image
              src={hispanicHackers}
              alt="Hispanic Hackers Image"
              className="shadow-lg h-fit mx-auto grid-cols-1"
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-palette6 font-bold">
                Hispanic Hackers
              </h5>
              <p className="mb-6 text-palette6">
                I volunteered to help revamp the website for the local Hispanic
                Hackers nonprofit. They made the switch from React JS to Next JS
                for their website. I teamed up with four awesome individuals,
                and my focus was the landing page. I built the layout from the
                ground up, adding in some cool conditional rendering inspired by
                a Figma design. Check out the final product by clicking the link
                below!
                <br></br>
                <span className="italic text-sm">updated 2023</span>
              </p>
              <Link
                href="https://www.hispanichackers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-palette5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-palette6 text-center shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To Hispanic Hacker website
              </Link>
            </div>
          </div>

          <div className=" bg-palette2 shadow-lg p-3 rounded-md">
            <Image
              src={TicTacToe}
              alt="Tic-Tac-Toe image"
              className=" shadow-lg h-fit"
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-palette6 font-bold">
                React Tic-Tac-Toe
              </h5>
              <p className="mb-6 text-palette6">
                I created a React tic-tac-toe game with modular components for
                the board and cells. State was managed using hooks like
                useState. I implemented game logic for wins and styled the UI
                with Tailwind CSS. This project offered hands-on experience in
                React, covering state, components, and UI.
                <br></br>
                <span className="italic text-sm">updated 2024</span>
              </p>
              <Link
                href="https://main.dd8lletq4lb3y.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-palette5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-palette6 text-center shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To React Tik-Tac-Toe
              </Link>
            </div>
          </div>

          <div className=" bg-palette2 shadow-lg p-3 rounded-md">
            <Image
              src={investmentCalc}
              alt="Investment Calculator image"
              className="h-fit shadow-lg"
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-palette6 font-bold">
                Investment Calculator
              </h5>
              <p className="mb-6 text-palette6">
                I created a React app for investment return forecasting,
                considering parameters like initial and annual investments,
                return rates, and duration. User input is stored in state for
                calculations, and data is efficiently passed between components
                using props. JavaScript functions ensure precise computation and
                monitoring of returns.
                <br></br>
                <span className="italic text-sm">updated 2024</span>
              </p>
              <Link
                href="https://main.d1r08ii8kqipne.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-palette5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-palette6 text-center shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To Investment Calculator
              </Link>
            </div>
          </div>
          <div className=" bg-palette2 shadow-lg p-3 rounded-md">
            <Image
              src={timerGame}
              alt="Timer Game image"
              className="h-fit shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-palette6 font-bold">
                React Timer Game
              </h5>
              <p className="mb-6 text-palette6">
                I developed a React web game challenging players to stop a timer
                near zero. By strategically using React useRef and createPortal,
                I optimized performance, prevented component re-evaluation, and
                enhanced user experience with efficient DOM access and modal
                rendering.
                <br></br>
                <span className="italic text-sm">updated 2024</span>
              </p>
              <Link
                href="https://main.d24hig7yswwjx.amplifyapp.com/"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-palette5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-palette6 text-center shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To React Timer Game
              </Link>
            </div>
          </div>

          <div className=" bg-palette2 shadow-lg p-3 rounded-md">
            <Image
              src={storeRefactor}
              alt="refactor project"
              className="h-fit shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-palette6 font-bold">
                Store Front useContext and useReducer refactor
              </h5>
              <p className="mb-6 text-palette6">
                In this project, I successfully refactored a premade store
                website, transitioning from scattered state management to a
                centralized approach. Leveraging React's useContext and
                useReducer hooks, I consolidated state logic into a single store
                file for enhanced efficiency and maintainability.<br></br>
                updated 2024
              </p>
              <a
                href="https://main.d1j3w8nsh8rkao.amplifyapp.com/"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-palette5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-palette6 text-center shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To Refactor Project
              </a>
            </div>
          </div>

          <div className=" bg-palette2 shadow-lg p-3 rounded-md">
            <Image
              src={reduxPracImage}
              alt="Redux Project Image"
              className="h-fit shadow-lg "
            />

            <div className="p-6">
              <h5 className="mb-4 text-lg text-palette6 font-bold">
                Redux Counter Project
              </h5>
              <p className="mb-6 text-palette6">
                I developed a ReactJS project to practice Redux Toolkit,
                managing a counter and mock authentication. Created slices
                handle both states—incrementing, decrementing numbers, and
                toggling authentication status.<br></br>
                updated 2024
              </p>
              <a
                href="https://main.d3en9wruzpsg5p.amplifyapp.com/"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block rounded bg-palette5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-palette6 text-center shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-primary-600 focus:shadow-xl focus:outline-none active:bg-primary-700 active:shadow-xl dark:shadow-lg dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
              >
                To Redux Counter
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
    </section>
  );
}

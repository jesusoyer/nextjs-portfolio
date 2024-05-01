
import hispanicHackers from "./HispanicHackers.png";
import TicTacToe from "./Tic tac toe image.png";
import investCalc from "./InvestmentCalc.png";
import Image from "next/image";
export default function HomeProjects() {
  return (
    <div className="container mx-auto md:px-6 ">
      {/* Section: Design Block */}
      <section className="p-6 text-center md:text-left">
<h2 className="text-2xl text-palette5 mb-5">Featured Projects</h2>


        <div className="block shadow-lg p-4 bg-palette2 text-palette5 dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <Image
                src={hispanicHackers}
                alt="hispanic hackers"
                className="  shadow-lg h-fit"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl font-bold">
                  <span className="text-danger dark:text-danger-500">
                    Hispanic Hackers website
                  </span>{" "}
                  
                </h2>
                <p className="mb-6 pb-2 text-palette5  dark:text-neutral-300">
                I volunteered to help revamp the website for the local Hispanic Hackers nonprofit. They made the switch from React JS to Next JS for their website. I teamed up with four awesome individuals, and my focus was the landing page. I built the layout from the ground up, adding in some cool conditional rendering inspired by a Figma design. Check out the final product by clicking the link below!
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full shadow-lg p-4 bg-palette6 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-palette5 transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => {
                    window.open('https://www.hispanichackers.com/','_blank'); 
                  }}
                >
                  To Hispanic Hackers website
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
      <section className="p-6 text-center md:text-left">
        <div className="block shadow-lg p-4  bg-palette2 text-palette5  dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl text-white font-bold">
                  <span className=" text-palette5   ">React.js TIC-TAC-TOE</span> 
                </h2>
                <p className="mb-6 pb-2 text-palette5  dark:text-neutral-300">
                I learned to develop a tic-tac-toe game using React, creating modular components like Grid and MarkButton. This project enhanced my proficiency in state management with useState and useEffect hooks, enabling dynamic rendering and player interactions. It also honed my skills in game logic and UI design with Tailwind CSS.
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full shadow-lg p-4 bg-palette6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-palette5 transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => {
                    window.open('https://main.dd8lletq4lb3y.amplifyapp.com/','_blank'); 
                  }}
                >
                  To React Tic-Tac-Toe
                </button>
              </div>
            </div>
            <div className="block w-full md:w-4/12 lg:flex">
              <Image
                src={TicTacToe}
                alt="Tic-Tac-Toe"
                className="w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
      <section className=" text-center md:text-left p-6">
        <div className="block  shadow-lg p-4  bg-palette2 text-palette5  dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <Image
                src={investCalc}
                alt="coming soon"
                className="w-full shadow-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl  text-palette5   font-bold">
                  <span className=" text-palette5   ">Investment Calculator</span> 
                </h2>
                <p className="mb-6 pb-2  text-palette5  dark:text-neutral-300">
                I developed a React.js application designed to forecast investment returns by computing key metrics such as initial investment, annual investment, expected return, and investment duration. The application utilizes a userInput state to store user-provided information, which is then leveraged for calculations. Additionally, I seamlessly passed user data between components using props. Furthermore, I implemented JavaScript functions capable of accurately computing and monitoring investment returns based on the user's input.
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full shadow-lg p-4 bg-palette6 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-pallette5  transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => {
                    window.open('https://main.d1r08ii8kqipne.amplifyapp.com/','_blank'); 
                  }}
                >
                  To Investment Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

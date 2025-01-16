import Image from "next/image";
import Link from "next/link";
import Logo from './personalLogo3.png';
import hispanicHackers from "./HispanicHackers.png";
import TicTacToe from "./Tic tac toe image.png";
import investmentCalc from "./InvestmentCalc.png";
import timerGame from "./timerGame.png";
import storeRefactor from "./storerefactorimage.png";
import reduxPracImage from "./reduxPracImage.png";

export default function HomeProjects() {
  const projects = [
    {
      id: 1,
      imageSrc: hispanicHackers,
      title: "Hispanic Hackers Website",
      description: "I volunteered to help revamp the website for the local Hispanic Hackers nonprofit using Next.js. I focused on building the landing page from the ground up.",
      link: "https://www.hispanichackers.com/",
      colSpan: 2,  // This project will take up 2 columns
      rowSpan: 2,  // This project will take up 2 rows
    },
    {
      id: 2,
      imageSrc: TicTacToe,
      title: "React.js Tic-Tac-Toe",
      description: "A tic-tac-toe game built with React.js to practice state management and game logic. It helped me learn about dynamic rendering and player interaction.",
      link: "https://main.dd8lletq4lb3y.amplifyapp.com/",
      colSpan: 1,  // This project will take up 1 column
      rowSpan: 1,  // This project will take up 1 row
    },
    {
      id: 3,
      imageSrc: investmentCalc,
      title: "Investment Calculator",
      description: "A React.js app to forecast investment returns. The app calculates and monitors returns based on user input such as initial investment, expected return, and duration.",
      link: "https://main.d1r08ii8kqipne.amplifyapp.com/",
      colSpan: 1,  // This project will take up 1 column
      rowSpan: 2,  // This project will take up 2 rows
    },
    {
      id: 4,
      imageSrc: timerGame,
      title: "Timer Game",
      description: " A challenging timer game built with React, leveraging hooks like `useRef` for performance optimization.",
      link: "https://main.d24hig7yswwjx.amplifyapp.com/",
      colSpan: 1,  // This project will take up 1 column
      rowSpan: 1,  // This project will take up 1 row
    },
    {
      id: 5,
      imageSrc: storeRefactor,
      title: "Refactor Project",
      description: "Refactored a store's state management using React's `useContext` and `useReducer` hooks for better maintainability..",
      link: "https://main.d1j3w8nsh8rkao.amplifyapp.com/",
      colSpan: 1,  // This project will take up 1 column
      rowSpan: 1,  // This project will take up 1 row
    },
    {
      id: 6,
      imageSrc: reduxPracImage,
      title: "Redux Practice",
      description: "A React project to practice Redux Toolkit, managing state with slices for a counter and authentication flow.",
      link: "https://example.com/games-library",
      colSpan: 2,  // This project will take up 2 columns
      rowSpan: 1,  // This project will take up 1 row
    }
  ];

  return (
    <div className="container mx-auto md:px-6 mt-6">
      



      <section className="p-6 text-center md:text-left">
       
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 shadow-2xl rounded-md bg-palette6 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-lg shadow-lg bg-white col-span-${project.colSpan} row-span-${project.rowSpan} transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl`}
            >
              {/* Project Image with increased brightness */}
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-full brightness-125"
              />

              {/* Overlay with Text and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <button
                    type="button"
                    className="inline-block px-4 py-2 bg-white text-palette6 rounded-full hover:bg-danger-600 transition-all"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

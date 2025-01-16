import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

export default function Homepage() {
  // Add state to manage the visibility of the dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use useRouter to get the current route
  const router = useRouter();
  const currentRoute = router.pathname;

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine the navbar background color based on the current route
  const navbarBackground =
    currentRoute === "/projects" || currentRoute === "/contact"
      ? "bg-black"
      : "bg-palette4 md:bg-opacity-70";

  return (
    <nav className={`${navbarBackground} absolute top-0 left-0 w-full z-10`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-palette5 self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-white"></span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-palette2 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent dark:bg-palette2 md:dark:bg-gray-900 dark:border-gray-700 justify-center">
            {/* Conditionally render or style Home link */}
            {currentRoute !== "/" && (
              <Link
                href="/"
                className="text-palette5 md:text-palette5 font-extrabold bg-transparent block py-2 px-3 rounded-t-lg hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            )}

            {/* Conditionally render or style Projects link */}
            {currentRoute !== "/projects" && (
              <Link
                href="/projects"
                className="text-palette5 md:text-palette5 font-extrabold bg-transparent block py-2 px-3 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:dark:hover:bg-transparent"
              >
                Projects
              </Link>
            )}

            {/* Conditionally render or style Contact link */}
            {currentRoute !== "/contact" && (
              <Link
                href="/contact"
                className="bg-transparent font-extrabold text-palette5 md:text-palette5 block py-2 px-3 rounded-b-lg hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

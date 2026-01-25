// components/Navigation.tsx
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-neutral-800 shadow-lg">
      {/* Main nav content */}
      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-neutral-700 transition-all group-hover:ring-white">
              <Image
                src="/images/profileImages/personalLogo.png"
                alt="JO Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="text-white font-light text-xl tracking-wide hidden sm:block">
              Jesus Oyervides Jr.
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
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

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {currentRoute !== "/" && (
              <Link 
                href="/"
                className="text-neutral-300 hover:text-white transition-colors font-light tracking-wider text-sm uppercase relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </Link>
            )}
            
            {currentRoute !== "/projects" && (
              <Link 
                href="/projects"
                className="text-neutral-300 hover:text-white transition-colors font-light tracking-wider text-sm uppercase relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </Link>
            )}
            
            {currentRoute !== "/contact" && (
              <Link 
                href="/contact"
                className="px-6 py-2 border border-neutral-600 text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all font-light tracking-wider text-sm uppercase"
              >
                Contact
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4 pt-4 border-t border-neutral-800`}
          id="navbar-default"
        >
          <div className="flex flex-col gap-4">
            {currentRoute !== "/" && (
              <Link
                href="/"
                className="text-neutral-300 hover:text-white transition-colors font-light tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}

            {currentRoute !== "/projects" && (
              <Link
                href="/projects"
                className="text-neutral-300 hover:text-white transition-colors font-light tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            )}

            {currentRoute !== "/contact" && (
              <Link
                href="/contact"
                className="text-neutral-300 hover:text-white transition-colors font-light tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
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
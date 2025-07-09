// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MdGrass } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-amber-100 shadow-md transition-all duration-300 ease-in-out">
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-16 px-4" : "h-24 px-6"
          }`}
        >
          <Link href="/">
            <div className="flex items-center gap-2 text-green-800">
              <MdGrass
                className={`transition-all duration-300 ${
                  scrolled ? "text-3xl" : "text-5xl"
                }`}
              />
              <span className="text-xl font-serif font-semibold">
                Panen Karya
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-6 text-green-800 font-medium">
            <Link
              href="/"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Beranda
            </Link>
            <Link
              href="/olahan"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Olahan
            </Link>
            <Link
              href="/#tentang"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Tentang
            </Link>
            <Link
              href="/#contact"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 text-green-800" />
              ) : (
                <Menu className="w-6 h-6 text-green-800" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-amber-100 px-4 pb-4 space-y-2">
            <Link
              href="/"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Beranda
            </Link>
            <Link
              href="/olahan"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Olahan
            </Link>
            <Link
              href="/#tentang"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Tentang
            </Link>
            <Link
              href="/#contact"
              className="relative after:block after:h-[2px] after:bg-green-800 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* This div acts as a spacer to prevent content from being hidden under the fixed navbar */}
      <div className={scrolled ? "h-16" : "h-24"}></div>
    </>
  );
}

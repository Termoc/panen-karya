// components/ThreeImageHover.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  const items = [
    {
      src: "/images/petani/petani-padi.jpg",
      text: "Sawah",
    },
    {
      src: "/images/petani/petani-pisang.jpg",
      text: "Pisang",
    },
    {
      src: "/images/petani/petani-cangkul.jpg",
      text: "Cangkul",
    },
  ];

  return (
    <main
      id="hero"
      className="relative w-full h-screen overflow-hidden m-0 flex items-center justify-center"
    >
      {/* Background Layer with Hover Effects */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="relative h-full w-full overflow-hidden group">
            <Image
              src={item.src}
              alt={item.text}
              fill
              // Apply zoom effect on hover
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay for darkening background initially and fading on hover */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-transparent"></div>
          </div>
        ))}
      </div>

      {/* Foreground Text Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center max-h-200 max-w-200 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Selamat Datang <br /> di Panen Karya
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
          Platform pertanian lokal yang menyediakan olahan langsung dari petani.
        </p>
        <Link href="/olahan">
          <button className="flex items-center justify-center text-2xl bg-[#43A047] pr-9 pl-9 pt-3 pb-3 rounded-2xl m-4 hover:rounded-3xl hover:bg-[#367938] ease-in-out duration-300 group relative overflow-hidden cursor-pointer">
            {/* Text shifts slightly to the left on hover */}
            <span className="transition-transform duration-300 group-hover:-translate-x-4">
              Lihat Olahan
            </span>
            {/* Arrow icon that appears and moves on hover */}
            <FaArrowRight className="absolute items-center right-0 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300"></FaArrowRight>
          </button>
        </Link>
        {/* The global overlay layer was removed as the individual overlays handle the darkening effect. */}
      </div>
    </main>
  );
}

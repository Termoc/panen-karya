// components/Card.tsx
"use client";

import Image from "next/image";
import React from "react";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  onClick: () => void; // Menambahkan prop onClick
};

export default function Card({
  imageUrl,
  title,
  description,
  onClick,
}: CardProps) {
  return (
    <div
      className="relative w-full h-64 overflow-hidden group shadow-lg hover:cursor-pointer rounded-lg transition-transform transform hover:-translate-y-1"
      onClick={onClick} // Menerapkan onClick di sini
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center px-4 text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

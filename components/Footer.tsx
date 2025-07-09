// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    // Hapus mt-16 dari sini
    <footer className="bg-gray-800 text-white py-8 rounded-t-lg shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright Information */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Panen Karya. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">Dukung Petani Lokal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

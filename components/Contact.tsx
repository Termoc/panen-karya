// components/Contact.tsx
"use client";

import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Menggunakan FiMail untuk ikon email

const Contact: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          HUBUNGI KAMI
        </h2>

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bagian Kiri: Kirim Pesan (Formulir Kontak) */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              KIRIM PESAN
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="sr-only">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="Nomor WhatsApp"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Pesan Anda"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-green-500 focus:border-green-500 transition duration-200 resize-y"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.453-1.484 2.028 2.027a.75.75 0 001.06-.01L19.03 9.03a.75.75 0 000-1.06l-8.006-8.006zM10.007 14.99l-2.028-2.027-4.453 1.484a.25.25 0 01-.29-.368L10.007 14.99z"></path>
                </svg>
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Bagian Kanan: Informasi Kontak & Peta */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                INFORMASI KONTAK
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-green-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Alamat:</h4>
                    <p>Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-green-600 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Telepon:</h4>
                    <p>+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-green-600 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email:</h4>
                    <p>panenkarya.farm@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Kami */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                FOLLOW KAMI
              </h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-2xl transition-colors duration-200 shadow-md"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl transition-colors duration-200 shadow-md"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl transition-colors duration-200 shadow-md"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Lokasi Kebun (Map Integration) */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                LOKASI KAMI
              </h3>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327922.930626687!2d107.18842745228247!3d-2.403174331702975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1752067362657!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kebun Panen Karya"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Klik pada peta untuk membuka Google Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

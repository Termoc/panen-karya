// components/About.tsx
"use client";

import Image from "next/image";

export default function About() {
  // Data untuk petani yang ditampilkan
  const farmer = {
    name: "Petani Organik Berpengalaman 15+ Tahun",
    description:
      "Saya adalah petani organik yang telah mengabdikan hidup selama lebih dari 15 tahun untuk menghasilkan produk pertanian berkualitas tinggi di wilayah Malang, Jawa Timur. Dengan komitmen pada pertanian berkelanjutan dan ramah lingkungan.",
    skills: [
      {
        icon: "🌿", // Emoji icon for organic vegetables
        text: "Sayur Organik: Bayam, kangkung, sawi, selada, dan berbagai sayuran hijau segar",
      },
      {
        icon: "🍓", // Emoji icon for tropical fruits
        text: "Buah Tropis: Stroberi, tomat cherry, paprika, dan buah-buahan musiman",
      },
      {
        icon: "🌾", // Emoji icon for superior rice
        text: "Padi Unggul: Varietas padi organik dengan kualitas beras premium",
      },
    ],
    // Placeholder image for the farmer's profile, matching the visual style
    profileImage: "/images/petani/petani-cangkul.jpg", // Menggunakan path gambar yang sesuai dengan struktur project Anda
  };

  return (
    <section id="tentang" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          TENTANG KAMI
        </h2>

        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
            {/* Left Section: Image of the Farmer */}
            {/* Mengatur tinggi eksplisit (misal: h-[500px]) untuk memastikan gambar muncul */}
            <div className="w-full md:w-1/2 relative h-[500px]">
              <Image
                src={farmer.profileImage}
                alt="Gambar Petani"
                fill
                className="object-cover rounded-l-lg hover:scale-105 ease-in-out duration-300" // Menyesuaikan sudut bulat
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Right Section: Information */}
            {/* Mengatur tinggi eksplisit yang sama untuk bagian informasi agar sejajar */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center h-[500px]">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                {farmer.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {farmer.description}
              </p>

              <h4 className="text-xl font-semibold text-green-700 mb-3">
                KEUNGGULAN UTAMA:
              </h4>
              <ul className="space-y-2">
                {farmer.skills.map((skill, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="mr-2 text-xl">{skill.icon}</span>
                    <span>{skill.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

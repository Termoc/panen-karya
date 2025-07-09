// app/kategori/page.tsx
"use client";

import Card from "@/components/Card";
import Resep from "@/components/Resep"; // Import komponen OlahanDetail
import { useState, useEffect } from "react"; // Import useEffect

import { IoClose } from "react-icons/io5";

// Definisikan tipe data untuk resep (sesuai dengan OlahanDetail.tsx)
type Recipe = {
  id: number;
  title: string;
  category: "sambal" | "tumis" | "daun";
  heroImage: string;
  mainIngredients: ("cabai" | "terong" | "daun")[];
  ingredients: { text: string; checked: boolean }[];
  steps: { title: string; description: string; image?: string }[];
};

// Data resep lengkap (ini akan menjadi sumber data untuk Card dan OlahanDetail)
const allRecipes: Recipe[] = [
  {
    id: 1,
    title: "Sambal Terasi Bakar",
    category: "sambal",
    heroImage: "/images/olahan/sambal.jpg", // Menggunakan gambar sawah sebagai placeholder
    mainIngredients: ["cabai"],
    ingredients: [
      { text: "10 buah cabai merah keriting", checked: false },
      { text: "5 buah cabai rawit", checked: false },
      { text: "1 sdt terasi bakar", checked: false },
      { text: "1 buah tomat", checked: false },
      { text: "Garam dan gula secukupnya", checked: false },
    ],
    steps: [
      {
        title: "Siapkan Bahan",
        description: "Siapkan semua cabai, tomat, dan terasi.",
      },
      {
        title: "Ulek Bumbu",
        description:
          "Ulek semua cabai, tomat, dan terasi hingga setengah halus.",
        image: "https://placehold.co/400x200/E53935/FFFFFF?text=Ulek+Bumbu",
      },
      {
        title: "Tambahkan Perasa",
        description: "Tambahkan garam dan gula, aduk rata.",
      },
      {
        title: "Sajikan",
        description: "Koreksi rasa dan sajikan dengan nasi hangat.",
      },
    ],
  },
  {
    id: 2,
    title: "Tumis Terong Pedas Manis",
    category: "tumis",
    heroImage: "/images/olahan/tumis-terong.jpg", // Menggunakan gambar cabai sebagai placeholder
    mainIngredients: ["terong", "cabai"],
    ingredients: [
      { text: "2 buah terong ungu, potong-potong", checked: false },
      { text: "5 buah cabai rawit, iris tipis", checked: false },
      { text: "3 siung bawang putih, cincang", checked: false },
      { text: "2 sdm kecap manis", checked: false },
      { text: "1 sdt saus tiram", checked: false },
      { text: "Garam dan gula secukupnya", checked: false },
      { text: "Minyak untuk menumis", checked: false },
    ],
    steps: [
      {
        title: "Goreng Terong",
        description: "Goreng terong hingga setengah matang, tiriskan.",
      },
      {
        title: "Tumis Bumbu",
        description:
          "Tumis bawang putih dan irisan cabai hingga harum dan sedikit layu.",
        image: "https://placehold.co/400x200/7E57C2/FFFFFF?text=Tumis+Bumbu",
      },
      {
        title: "Masak Terong",
        description:
          "Masukkan potongan terong, tambahkan kecap manis, saus tiram, garam, dan gula. Aduk rata dan masak hingga bumbu meresap sempurna.",
      },
      {
        title: "Sajikan",
        description:
          "Angkat tumis terong dan sajikan selagi hangat sebagai lauk pendamping nasi.",
      },
    ],
  },
  {
    id: 3,
    title: "Gulai Daun Singkong",
    category: "daun",
    heroImage: "/images/olahan/gulai-singkong.jpg", // Menggunakan gambar kacang panjang sebagai placeholder
    mainIngredients: ["daun"],
    ingredients: [
      { text: "1 ikat daun singkong, rebus dan peras", checked: false },
      { text: "500 ml santan", checked: false },
      { text: "Bumbu gulai instan", checked: false },
      { text: "Teri medan secukupnya, goreng", checked: false },
    ],
    steps: [
      {
        title: "Rebus Daun Singkong",
        description:
          "Rebus daun singkong hingga empuk, tiriskan dan potong-potong.",
      },
      {
        title: "Masak Santan",
        description: "Didihkan santan dan bumbu gulai.",
      },
      {
        title: "Gabungkan Bahan",
        description: "Masukkan daun singkong, masak hingga bumbu meresap.",
        image: "https://placehold.co/400x200/43A047/FFFFFF?text=Gulai+Daun",
      },
      {
        title: "Sajikan",
        description: "Taburi dengan teri medan goreng sebelum disajikan.",
      },
    ],
  },
  // Tambahkan resep lainnya di sini sesuai kebutuhan
];

export default function Olahan() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "sambal" | "tumis" | "daun"
  >("all");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes =
    selectedCategory === "all"
      ? allRecipes
      : allRecipes.filter((recipe) => recipe.category === selectedCategory);

  const handleCardClick = (recipeId: number) => {
    const recipe = allRecipes.find((r) => r.id === recipeId);
    if (recipe) {
      setSelectedRecipe(recipe);
      setShowDetailModal(true);
    }
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
    setSelectedRecipe(null);
  };

  // New function to handle clicks on related recipes within the modal
  const handleRelatedRecipeClick = (recipeId: number) => {
    const recipe = allRecipes.find((r) => r.id === recipeId);
    if (recipe) {
      setSelectedRecipe(recipe);
      // The modal is already open, so no need to setShowDetailModal(true) again.
      // The `Resep` component will re-render with the new `selectedRecipe`.
    }
  };

  // Efek samping untuk menambahkan dan menghapus event listener tombol Esc
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showDetailModal) {
        handleCloseDetailModal();
      }
    };

    if (showDetailModal) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    // Cleanup function untuk menghapus event listener saat komponen unmount
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showDetailModal]); // Dependensi: hanya jalankan ulang jika showDetailModal berubah

  return (
    <div className="min-h-screen bg-gray-100 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Kategori Produk & Resep
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedCategory === "all"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setSelectedCategory("sambal")}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedCategory === "sambal"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Sambal & Saus
          </button>
          <button
            onClick={() => setSelectedCategory("tumis")}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedCategory === "tumis"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Sayur Tumis
          </button>
          <button
            onClick={() => setSelectedCategory("daun")}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedCategory === "daun"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Olahan Daun
          </button>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              imageUrl={recipe.heroImage}
              title={recipe.title}
              description={
                recipe.category === "sambal"
                  ? "Resep pedas untuk selera Anda."
                  : recipe.category === "tumis"
                  ? "Olahan sayur yang lezat dan praktis."
                  : "Hidangan sehat dari daun-daunan segar."
              }
              onClick={() => handleCardClick(recipe.id)} // Menambahkan onClick handler
            />
          ))}
          {filteredRecipes.length === 0 && (
            <p className="col-span-full text-center text-gray-600">
              Tidak ada resep yang ditemukan dalam kategori ini.
            </p>
          )}
        </div>
      </div>

      {/* Recipe Detail Modal */}
      {showDetailModal && selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in custom-scrollbar-hide">
            <button
              onClick={handleCloseDetailModal}
              // FIX: Mengubah absolute menjadi fixed untuk menempel di viewport
              // FIX: Menyesuaikan posisi top dan right agar terlihat full
              className="fixed top-4 right-4 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold z-[60] shadow-lg hover:bg-gray-700 transition-colors duration-200"
              aria-label="Tutup Resep"
            >
              <IoClose />
            </button>
            {/* Meneruskan seluruh objek resep ke OlahanDetail */}
            <Resep
              recipeData={selectedRecipe}
              onRelatedRecipeClick={handleRelatedRecipeClick} // Pass the new handler
            />
          </div>
        </div>
      )}
    </div>
  );
}

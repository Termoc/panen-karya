// components/OlahanDetail.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // Import useEffect
import { FiCheckSquare, FiSquare, FiPrinter } from "react-icons/fi";
import { FaPepperHot, FaLeaf } from "react-icons/fa";
import { IoMdWater } from "react-icons/io";

// Definisikan tipe data untuk resep, sekarang menerima prop recipeData
type Recipe = {
  id: number;
  title: string;
  category: "sambal" | "tumis" | "daun";
  heroImage: string;
  mainIngredients: ("cabai" | "terong" | "daun")[];
  ingredients: { text: string; checked: boolean }[];
  steps: { title: string; description: string; image?: string }[];
};

type RelatedRecipe = {
  id: number;
  title: string;
  image: string;
  category: string;
};

// Data resep terkait (akan tetap statis di sini untuk demo)
const relatedRecipes: RelatedRecipe[] = [
  {
    id: 1, // Changed ID to match existing recipe for demonstration
    title: "Sambal Terasi Bakar",
    image: "/images/olahan/sambal.jpg",
    category: "Sambal",
  },
  {
    id: 3, // Changed ID to match existing recipe for demonstration
    title: "Gulai Daun Singkong",
    image: "/images/olahan/gulai-singkong.jpg",
    category: "Olahan Daun",
  },
  {
    id: 2, // Changed ID to match existing recipe for demonstration
    title: "Tumis Terong Pedas Manis",
    image: "/images/olahan/tumis-terong.jpg",
    category: "Tumis",
  },
];

// Map untuk ikon bahan utama
const ingredientIcons = {
  cabai: <FaPepperHot className="text-red-500" />,
  terong: <IoMdWater className="text-purple-500" />,
  daun: <FaLeaf className="text-green-500" />,
};

// Map untuk warna badge kategori
const categoryColors = {
  sambal: "bg-red-100 text-red-800",
  tumis: "bg-purple-100 text-purple-800",
  daun: "bg-green-100 text-green-800",
};

// Ubah OlahanDetail untuk menerima prop recipeData dan onRelatedRecipeClick
export default function Resep({
  recipeData,
  onRelatedRecipeClick,
}: {
  recipeData: Recipe;
  onRelatedRecipeClick: (recipeId: number) => void;
}) {
  // Gunakan state untuk mengelola status checkbox bahan-bahan
  const [ingredientsState, setIngredientsState] = useState(
    recipeData.ingredients.map((ing) => ({ ...ing })) // Buat salinan agar tidak memodifikasi prop langsung
  );

  // Update ingredientsState if recipeData changes (e.g., when a related recipe is clicked)
  // This ensures the checkboxes reset for the new recipe
  useEffect(() => {
    setIngredientsState(recipeData.ingredients.map((ing) => ({ ...ing })));
  }, [recipeData]); // FIX: Menambahkan recipeData ke dependency array

  const handleToggleIngredient = (index: number) => {
    const newIngredients = [...ingredientsState];
    newIngredients[index].checked = !newIngredients[index].checked;
    setIngredientsState(newIngredients);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-50 min-h-screen" id="olahan-detail-section">
      {/* Tambahkan ID untuk CSS print */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src={recipeData.heroImage}
            alt={recipeData.title}
            fill
            className="object-cover"
            priority
            unoptimized={true}
          />
        </div>

        {/* Metadata */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                categoryColors[recipeData.category]
              }`}
            >
              {recipeData.category}
            </span>
            <div className="flex items-center gap-2 text-gray-500">
              <span>Bahan Utama:</span>
              {recipeData.mainIngredients.map((ing) => (
                <span key={ing} className="text-xl">
                  {ingredientIcons[ing]}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {recipeData.title}
          </h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition no-print" /* Tambahkan no-print */
          >
            <FiPrinter />
            <span>Cetak Resep</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-4">Bahan & Takaran</h2>
            <ul className="space-y-3">
              {ingredientsState.map((ingredient, index) => (
                <li
                  key={index}
                  onClick={() => handleToggleIngredient(index)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span className="text-green-600 text-xl">
                    {ingredient.checked ? (
                      <FiCheckSquare />
                    ) : (
                      <FiSquare className="opacity-50 group-hover:opacity-100" />
                    )}
                  </span>
                  <span
                    className={`flex-1 ${
                      ingredient.checked
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {ingredient.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Langkah-langkah</h2>
            <div className="relative border-l-2 border-gray-200 pl-8">
              {recipeData.steps.map((step, index) => (
                <div key={index} className="mb-10">
                  <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-green-200 text-green-800 rounded-full text-lg font-bold">
                    {index + 1}
                  </span>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                    {step.image && (
                      <div className="mt-4 w-full h-40 relative rounded-md overflow-hidden">
                        <Image
                          src={step.image}
                          alt={`Langkah ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Recipes Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Resep Terkait Lainnya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedRecipes.map((related) => (
              <a
                href="#" // Keep href for accessibility, but prevent default behavior with onClick
                key={related.id}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  onRelatedRecipeClick(related.id); // Call the passed function
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden group block"
              >
                <div className="h-40 w-full relative">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true} // Added for better print compatibility
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">
                    {related.category}
                  </span>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {related.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

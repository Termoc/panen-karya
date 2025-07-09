/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "placehold.co", // Tambahkan hostname ini
      // Jika Anda memiliki domain lain untuk gambar (misalnya, dari CDN atau hosting gambar),
      // tambahkan juga di sini. Contoh: 'my-image-cdn.com'
    ],
  },
};

module.exports = nextConfig;

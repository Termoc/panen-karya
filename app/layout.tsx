import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientOnly from "@/components/CLientOnly";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panen Karya",
  description: "Website untuk Petani Lokal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {/* Konten utama akan mengambil sisa ruang yang tersedia */}
        <main className="flex-grow">{children}</main>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regal Homes Utah | Premium Semi-Custom Homes",
  description: "Building premium semi-custom homes in Utah since 1993. Explore our luxury communities in Mapleton, Ogden, and Heber City.",
  keywords: "Regal Homes, Utah homes, custom homes, luxury homes, Mapleton, Heber City, Ogden, new construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Kopi Senja — Coffee Shop di Jakarta | Specialty Coffee & Cozy Space",
  description:
    "Kopi Senja adalah coffee shop di Jakarta dengan specialty coffee, manual brew, dan suasana hangat untuk kerja maupun bersantai. Buka setiap hari 08.00–22.00.",
  openGraph: {
    title: "Kopi Senja — Specialty Coffee & Cozy Space",
    description:
      "Specialty coffee, manual brew, dan suasana hangat di jantung Jakarta.",
    type: "website",
    locale: "id_ID",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Kopi Senja",
  description: "Specialty coffee shop di Jakarta",
  servesCuisine: "Coffee",
  priceRange: "Rp18.000 - Rp45.000",
  openingHours: "Mo-Su 08:00-22:00",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alka's Security",
  description: "Transporte y seguridad.",
  keywords: [
    "security",
    "securities",
    "transporte",
    "transport",
    "seguridad",
    "security",
    "logística",
    "logistics",
    "valores",
    "stock"
  ],
  applicationName: "Alka's Security",
  creator: "Sandro Ramirez",
  openGraph: {
    title: "Alka's Security",
    description:
      "Alka's Security. Calidad y confianza a tu servicio.",
    url: "https://ramirezsandro.com",
    siteName: "Alka's Security",
    locale: "es_UY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
  },
};

export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={`${oswald.className} font-normal tracking-wide flex flex-col min-h-screen h-full`}
        suppressHydrationWarning
      >
        <Header />
        <Navbar />
        <main className="flex-grow flex flex-col justify-center h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

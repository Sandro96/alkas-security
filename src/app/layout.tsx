import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alka's Security - Servicios de Seguridad y Transporte de Valores en Uruguay",
  description: "Alka's Security ofrece servicios profesionales de seguridad, transporte de valores y logística en Uruguay. Protegemos bancos, supermercados, navieras y empresas con tecnología de vanguardia y personal altamente capacitado.",
  keywords: [
    "seguridad privada Uruguay",
    "transporte de valores",
    "servicios de seguridad",
    "logística empresarial",
    "custodia de valores",
    "seguridad bancaria",
    "protección empresarial",
    "servicios de custodia",
    "seguridad 24 horas",
    "transporte seguro",
    "Alka's Security",
    "seguridad Montevideo",
    "custodia de dinero",
    "servicios de protección",
    "seguridad industrial"
  ],
  applicationName: "Alka's Security",
  creator: "Alka's Security",
  authors: [{ name: "Alka's Security" }],
  publisher: "Alka's Security",
  openGraph: {
    title: "Alka's Security - Servicios de Seguridad y Transporte de Valores",
    description: "Servicios profesionales de seguridad, transporte de valores y logística en Uruguay. Protegemos su empresa con tecnología de vanguardia y personal especializado.",
    url: "https://alkas-security.com",
    siteName: "Alka's Security",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Alka's Security - Servicios de Seguridad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alka's Security - Servicios de Seguridad y Transporte de Valores",
    description: "Servicios profesionales de seguridad, transporte de valores y logística en Uruguay.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://alkas-security.com",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
};

export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alka's Security",
    "description": "Servicios profesionales de seguridad, transporte de valores y logística en Uruguay",
    "url": "https://alkas-security.com",
    "logo": "https://alkas-security.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+598-1234-5678",
      "contactType": "customer service",
      "email": "ramirezsandro96@gmail.com",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 1234",
      "addressLocality": "Montevideo",
      "addressCountry": "UY"
    },
    "openingHours": "Mo-Fr 10:00-18:00",
    "sameAs": [
      "https://www.facebook.com/alkas-security",
      "https://www.instagram.com/alkas-security",
      "https://www.linkedin.com/company/alkas-security"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Servicios de Seguridad Privada",
        "description": "Protección y seguridad para empresas e instituciones"
      },
      {
        "@type": "Service", 
        "name": "Transporte de Valores",
        "description": "Custodia y transporte seguro de dinero y valores"
      },
      {
        "@type": "Service",
        "name": "Servicios de Logística",
        "description": "Soluciones logísticas empresariales especializadas"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Uruguay"
    }
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
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

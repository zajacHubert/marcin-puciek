import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "../styles/reset.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat-alternates",
});

export const metadata: Metadata = {
  title: {
    default: "Marcin Puciek – Model i Aktor Reklamowy | Warszawa",
    template: "%s | Marcin Puciek",
  },
  description:
    "Marcin Puciek – profesjonalny fotomodel i aktor reklamowy z Warszawy. Doświadczenie w kampaniach dla T-Mobile, Żabka, Suntago i innych. Wzrost 185 cm.",
  keywords: [
    "model Warszawa",
    "aktor reklamowy Warszawa",
    "fotomodel Warszawa",
    "Marcin Puciek",
    "model komercyjny",
    "aktor komercyjny",
    "casting Warszawa",
  ],
  authors: [{ name: "Marcin Puciek" }],
  creator: "Marcin Puciek",
  metadataBase: new URL("https://marcinpuciek.pl"), // ← zmień na swój domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marcin Puciek – Model i Aktor Reklamowy",
    description:
      "Profesjonalny fotomodel i aktor reklamowy z Warszawy. Kampanie dla T-Mobile, Żabka, Suntago i innych.",
    url: "https://marcinpuciek.pl",
    siteName: "Marcin Puciek",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/dimensions/img17.jpg", // ← najlepsze zdjęcie do podglądu
        width: 1200,
        height: 630,
        alt: "Marcin Puciek – Model i Aktor Reklamowy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcin Puciek – Model i Aktor Reklamowy",
    description: "Profesjonalny fotomodel i aktor reklamowy z Warszawy.",
    images: ["/images/dimensions/img17.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marcin Puciek",
    jobTitle: "Model i Aktor Reklamowy",
    description:
      "Profesjonalny fotomodel i aktor reklamowy z Warszawy. Doświadczenie w kampaniach dla T-Mobile, Żabka, Suntago i innych.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warszawa",
      addressCountry: "PL",
    },
    url: "https://marcinpuciek.pl",
    image: "https://marcinpuciek.pl/images/dimensions/img17.jpg",
    worksFor: [
      { "@type": "Organization", name: "T-Mobile" },
      { "@type": "Organization", name: "Żabka" },
      { "@type": "Organization", name: "Suntago" },
      { "@type": "Organization", name: "Betclic" },
      { "@type": "Organization", name: "Polsat" },
    ],
  };

  return (
    <html lang="pl">
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

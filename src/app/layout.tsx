import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fanijayatrans.com"),
  title: "Fani Jaya Trans Boyolali | Sewa Bus Pariwisata Aman & Nyaman",
  description:
    "Jasa sewa bus pariwisata terpercaya di Boyolali & Solo Raya. Menyediakan Big Bus (45-59 seat) & Medium Bus (31-35 seat) dengan fasilitas lengkap, crew berpengalaman, melayani wisata Jawa, Bali, Lombok, & ziarah wali.",
  keywords: [
    "sewa bus boyolali",
    "fani jaya trans",
    "sewa bus pariwisata boyolali",
    "sewa big bus solo raya",
    "sewa medium bus karanggede",
    "bus pariwisata jawa bali",
    "sewa bus ziarah wali songo",
    "rental bus boyolali",
    "sewa bus study tour",
  ],
  authors: [{ name: "Fani Jaya Trans Boyolali" }],
  creator: "Fani Jaya Trans",
  publisher: "Fani Jaya Trans Boyolali",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fanijayatrans.com",
    title: "Sewa Bus Pariwisata Aman & Nyaman – Fani Jaya Trans Boyolali",
    description:
      "Armada Big Bus & Medium Bus prima dengan fasilitas Full AC, Audio Karaoke, Reclining Seat, & driver ramah berpengalaman. Siap melayani wisata Jawa, Bali, Lombok, dan ziarah.",
    siteName: "Fani Jaya Trans Boyolali",
    images: [
      {
        url: "/images/hero-bus.jpg",
        width: 1200,
        height: 630,
        alt: "Armada Bus Pariwisata Fani Jaya Trans Boyolali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fani Jaya Trans Boyolali – Sewa Bus Pariwisata Nyaman & Terpercaya",
    description:
      "Sewa bus pariwisata Big Bus & Medium Bus di Boyolali. Fasilitas lengkap, harga transparan, respon 24 jam.",
    images: ["/images/hero-bus.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fanijayatrans.com",
  },
  icons: {
    icon: "data:,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Fani Jaya Trans Boyolali",
    image: "https://fanijayatrans.com/images/hero-bus.jpg",
    telephone: "+6282287879191",
    url: "https://fanijayatrans.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Karanggede – Gemolong KM 05, Karangkepoh",
      addressLocality: "Boyolali",
      addressRegion: "Jawa Tengah",
      postalCode: "57381",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.3572557",
      longitude: "110.673825",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "230",
    },
    priceRange: "$$",
  };

  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

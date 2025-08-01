import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

/* ---------- local fonts ---------- */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ---------- site-wide <head> metadata ---------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://ciampitti-lab.github.io"),
  title: "Ciampitti Lab - Digital Agriculture Research",
  description:
    "Advancing agricultural science through computer vision, data analysis and crop-systems research.",

  /* ---- FAVICON: stable URL, no hash ---- */
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      // optional legacy fallback for old browsers
      { url: "/favicon.ico" },
    ],
  },

  /* ---- Open Graph / Twitter ---- */
  openGraph: {
    type: "website",
    url: "https://ciampitti-lab.github.io/",
    siteName: "Ciampitti Lab",
    title: "Ciampitti Lab - Digital Agriculture & Farming Systems Research",
    description:
      "Advancing agricultural science through computer vision, data analysis and crop-systems research.",
    images: [
      {
        url: "/lab-logo.png",
        width: 512,
        height: 512,
        alt: "Ciampitti Lab logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CiampittiLab",
    creator: "@pcisdeli",
    images: ["/lab-logo.png"],
  },

  robots: { "max-image-preview": "large" },
  verification: { google: "ypOgEpElFzU7fdEsaDRwEZNOyfmk0KhY06Gl5FsUhbg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ---- Structured-data ---- */}
        <Script
          id="website-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://ciampitti-lab.github.io/",
              name: "Ciampitti Lab",
              alternateName: "Ciampitti-Lab",
              logo: "https://ciampitti-lab.github.io/favicon.png",
            }),
          }}
        />
      </head>

      <body
        className={`${plusJakartaSans.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}

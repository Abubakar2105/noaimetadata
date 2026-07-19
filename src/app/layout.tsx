import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { SITE, siteGraph } from "@/lib/seo";



export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "NoAIMetadata — Remove AI Metadata & C2PA from Images",
    template: "%s | NoAIMetadata",
  },

  description:
    "Instantly remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generated tags from PNG and JPEG images. Free, secure, and private.",

  keywords: [
    "remove AI metadata",
    "remove C2PA metadata",
    "strip AI metadata",
    "remove Content Credentials",
    "remove EXIF data",
    "remove Midjourney metadata",
    "remove Stable Diffusion parameters",
    "remove DALL-E metadata",
    "AI metadata remover",
    "strip C2PA from PNG",
  ],

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "MroX9Sseih8sS5KwSjGgTcwNznoK8xAc-tbST_FWz6w",
  },
  openGraph: {
    title: "NoAIMetadata — Remove AI Metadata & C2PA from Images",
    description:
      "Remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generated tags from images in seconds.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NoAIMetadata — Remove AI Metadata & C2PA from Images",
    description:
      "Remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generated tags from images instantly.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <Script
  src="https://cloud.umami.is/script.js"
  data-website-id="bef65b0f-7416-4dc3-8699-4ba2c4c1516b"
  strategy="afterInteractive"
/>
      <body className="bg-black text-white antialiased font-sans flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
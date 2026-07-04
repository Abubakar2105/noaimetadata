import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";



export const metadata: Metadata = {
  metadataBase: new URL("https://noaimetadata.vercel.app"), 

  title: {
    default: "NoAIMetadata — Remove AI Metadata from Images",
    template: "%s | NoAIMetadata",
  },

  description:
    "Instantly remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generated tags from PNG and JPEG images. Free, secure, and private.",

  openGraph: {
    title: "NoAIMetadata — Remove AI Metadata from Images",
    description:
      "Remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generated tags from images in seconds.",
    url: "https://noaimetadata.vercel.app",
    siteName: "NoAIMetadata",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "NoAIMetadata - Remove AI Metadata from Images",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NoAIMetadata — Remove AI Metadata from Images",
    description:
      "Remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generated tags from images instantly.",
    images: ["/preview.jpg"],
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
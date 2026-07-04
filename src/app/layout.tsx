import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), 

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
    url: "https://your-domain.com",
    siteName: "NoAIMetadata",
    images: [
      {
        url: "/preview.avif",
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
    images: ["/preview.avif"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white antialiased font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
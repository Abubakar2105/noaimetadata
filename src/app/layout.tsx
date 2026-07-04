import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Noaimetadata — Strip C2PA & AI Watermarks',
    template: '%s | Noaimetadata'
  },
  description: 'Instantly detect and remove AI-generated metadata (C2PA, Stable Diffusion, DALL-E) from PNG/JPEG images. 100% free, secure, and private.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
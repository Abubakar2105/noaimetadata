import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn why we built NoAIMetadata and our commitment to digital privacy and artist rights.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
      <div>
        <p className="text-xs font-bold tracking-[0.3em] text-lime-400 uppercase mb-4">Our Mission</p>
               <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
          About<br />Noaimetadata.
        </h1>
      </div>

      <div className="space-y-8 text-white/40 leading-relaxed border-t border-white/5 pt-12">
        <p className="text-xl text-white/60">We believe artists and creators should have control over their digital files.</p>
        <p>As AI image generation became mainstream, we noticed a growing problem: platforms were secretly embedding permanent, unalterable metadata into images. While designed for transparency, this data began to be used to automatically flag, demonetize, or censor creators across social media.</p>
        <p>More concerningly, these metadata chunks often store your private prompts—the intellectual property of your creative workflow—in plain text for anyone who knows how to right-click and inspect a file.</p>
              <p><span className="text-white font-medium">Noaimetadata was built to give power back to the user.</span> Our tool safely parses...</p>
        <p>We do not store your images. We do not log your prompts. We do not use tracking cookies. This is a free, open-source utility built for the digital privacy community.</p>
      </div>
    </div>
  );
}
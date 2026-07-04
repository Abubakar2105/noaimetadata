import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Terms of Service", description: "Terms of Service for AI Metadata Remover." };

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-5xl font-black tracking-tighter">Terms of Service</h1>
      <p className="text-white/40 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      
      <div className="space-y-8 text-white/50 leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">1. Acceptance of Terms</h2>
          <p>By accessing and using MetaStrip (AI Metadata Remover), you agree to be bound by these Terms. If you do not agree, do not use the service.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">2. Use of Service</h2>
          <p>This tool is provided &quot;as is&quot; for the purpose of removing metadata from images. You are solely responsible for how you use the cleaned images. You must not use this service for illegal purposes, including violating copyright laws or platform terms of service.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">3. Intellectual Property</h2>
          <p>We do not claim any ownership over the images you upload or download. You retain all rights to your original artwork and cleaned files.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">4. Limitation of Liability</h2>
          <p>We do not guarantee that removing metadata will bypass all third-party AI detection systems (some platforms use pixel-analysis, not just metadata). We are not liable for any consequences arising from the use of cleaned files on external platforms.</p>
        </section>
      </div>
    </div>
  );
}
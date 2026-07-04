import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy Policy for AI Metadata Remover." };

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-5xl font-black tracking-tighter">Privacy Policy</h1>
      <p className="text-white/40 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      
      <div className="space-y-8 text-white/50 leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">1. Information We Collect</h2>
          <p>We do not collect, store, or log any personal information or image files. When you use our tool, your image is processed in temporary server memory and immediately deleted from our system the moment the processed file is returned to you.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">2. Third-Party Advertising (Google AdSense)</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
          <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-lime-400 underline" target="_blank">Google Ads Settings</a>.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">3. Log Data</h2>
          <p>Like most hosting providers (Vercel), our backend automatically collects standard server log data (IP address, browser type, time of access) purely for security and error debugging. We do not use this data to track or identify individual users.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white/80">4. Consent</h2>
          <p>By using our website, you consent to our privacy policy and the use of cookies by third-party advertisers as described above.</p>
        </section>
      </div>
    </div>
  );
}
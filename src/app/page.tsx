import ImageAnalyzer from '@/components/ImageAnalyzer';
import HowItWorks from '@/components/HowItWorks';
import SeoContent from '@/components/SeoContent';
import FAQ from '@/components/FAQ';
import Link from 'next/link'; // Add this import

export default function Home() {
  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* Hero + Tool Wrapper with Ambient Glows */}
      <div className="relative">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-lime-500/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none"></div>
        
        <header className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-6">
          <p className="text-xs font-bold tracking-[0.3em] text-lime-400 uppercase">Secure & Private</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
            Strip AI<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Metadata.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-md leading-relaxed">
            Remove hidden C2PA signatures, generation parameters, and watermarks from your images instantly.
          </p>
        </header>

        <div id="tool" className="relative z-10 max-w-5xl mx-auto px-6 pb-32 scroll-mt-20">
          <ImageAnalyzer />
        </div>
      </div>

      {/* Heavy SEO Text Blocks */}
      <div className="relative bg-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10">
          <SeoContent />
        </div>
      </div>
    

      {/* Process */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <HowItWorks />
      </div>

      {/* FAQ Schema */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <FAQ />
      </div>
    </div>
  );
}
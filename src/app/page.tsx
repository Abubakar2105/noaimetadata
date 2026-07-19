import ImageAnalyzer from '@/components/ImageAnalyzer';
import HowItWorks from '@/components/HowItWorks';
import SeoContent from '@/components/SeoContent';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { GUIDES } from '@/lib/guides';

export default function Home() {
  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* Hero + Tool Wrapper with Ambient Glows */}
      <div className="relative">
        <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-lime-500/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-15%] w-125 h-125 bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none"></div>
        
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10">
          <SeoContent />
        </div>
      </div>
    

      {/* Process */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <HowItWorks />
      </div>

      {/* Guides — internal links to long-tail landing pages */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-white/5 pt-16">
          <p className="text-xs font-bold tracking-[0.3em] text-lime-400 uppercase mb-4">Guides</p>
          <h2 className="text-4xl font-black tracking-tighter mb-10 leading-[0.9]">
            Remove metadata by type
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/remove/${g.slug}`}
                className="border border-white/5 p-6 rounded-2xl hover:border-lime-400/20 transition-colors group"
              >
                <h3 className="text-sm font-bold text-white/80 group-hover:text-lime-400 transition-colors">
                  {g.title}
                </h3>
                <p className="text-xs text-white/30 mt-2 leading-relaxed">
                  {g.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <FAQ />
      </div>
    </div>
  );
}
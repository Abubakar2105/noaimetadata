import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-tighter text-white hover:text-lime-400 transition-colors">
          NOAI<span className="text-lime-400">METADATA</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#tool" className="text-xs font-medium text-white/50 hover:text-white transition-colors tracking-wider uppercase">Tool</Link>
          <Link href="/about" className="text-xs font-medium text-white/50 hover:text-white transition-colors tracking-wider uppercase">About</Link>
          <Link href="/privacy-policy" className="text-xs font-medium text-white/50 hover:text-white transition-colors tracking-wider uppercase">Privacy</Link>
        </div>

        {/* IMPORTANT: Change this to your actual email address */}
        <a href="mailto:abubakar16350@gmail.com" className="text-[10px] font-bold tracking-widest border border-white/10 px-4 py-2 rounded-full hover:border-lime-400/50 hover:text-lime-400 transition-all">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
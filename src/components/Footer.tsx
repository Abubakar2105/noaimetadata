import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tighter text-white">
            NOAI<span className="text-lime-400">METADATA</span>
          </h3>
          <p className="text-xs text-white/30 leading-relaxed max-w-xs">
            The standard tool for stripping AI metadata, C2PA signatures, and hidden generation parameters from digital images.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-sm text-white/30 hover:text-lime-400 transition-colors">About Us</Link></li>
            <li><Link href="/privacy-policy" className="text-sm text-white/30 hover:text-lime-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="text-sm text-white/30 hover:text-lime-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/30">
            <li>
              {/* IMPORTANT: Change to your actual email */}
              <a href="mailto:abubakar16350@gmail.com" className="hover:text-lime-400 transition-colors">
                Contact Us
              </a>
            </li>
            <li className="text-white/20 text-xs leading-relaxed mt-4">
              For DMCA requests, bug reports, or partnership inquiries, please reach out via email.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] text-white/20 tracking-[0.2em] uppercase font-mono">
          © {new Date().getFullYear()} Noaimetadata. All rights reserved.
        </div>
        <div className="text-[10px] text-white/20 tracking-[0.2em] uppercase font-mono">
          Built for digital privacy
        </div>
      </div>
    </footer>
  );
}
'use client';

import { useState, useRef, useCallback } from 'react';
import { analyzeImage, removeMetadata, AnalyzeResult } from '@/lib/api';

export default function ImageAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [isCleaned, setIsCleaned] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setError(null); setResult(null); setIsCleaned(false);
    setFile(f); setPreview(URL.createObjectURL(f));
    setLoading(true);
    analyzeImage(f).then(setResult).catch(err => setError(err.message)).finally(() => setLoading(false));
  }, []);

  const handleRemove = async () => {
    if (!file) return;
    setRemoving(true); setError(null);
    try {
      const newCleanImageUrl = await removeMetadata(file);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(newCleanImageUrl);
      setIsCleaned(true); setResult(null);
    } catch (err: any) { setError(err.message); } 
    finally { setRemoving(false); }
  };

  const handleDownload = () => {
    if (!preview || !file) return;
    const a = document.createElement('a');
    a.href = preview; a.download = `cleaned_${file.name}`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  const reset = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null); setPreview(null); setResult(null); setIsCleaned(false); setError(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_-20px_rgba(163,230,53,0.15)] transition-shadow duration-1000 hover:shadow-[0_0_120px_-10px_rgba(163,230,53,0.25)]">
      
      {/* Dropzone / Image Container */}
      <div className="h-[400px] md:h-[500px] w-full relative bg-transparent flex items-center justify-center overflow-hidden">
        {!preview ? (
          <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-white/10 hover:border-lime-400/50 hover:bg-lime-400/5 transition-all duration-700 group">
            <input data-umami-event="uploaded_image" ref={inputRef} type="file" accept="image/png,image/jpeg" onChange={handleSelect} className="hidden" />
            <div className="w-16 h-16 rounded-full border-2 border-white/10 group-hover:border-lime-400/50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(163,230,53,0.2)]">
              <svg className="w-6 h-6 text-white/40 group-hover:text-lime-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            </div>
            <p className="text-sm text-white/40 group-hover:text-white/80 font-medium transition-colors">Drop image here to scan</p>
            <p className="text-xs text-white/20 mt-2 font-mono">PNG, JPEG • MAX 20MB</p>
          </label>
        ) : (
          <>
            <img src={preview} alt="Preview" className="max-w-full max-h-full object-contain transition-all duration-500" />
            {loading && <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs text-white/50 font-mono tracking-widest">SCANNING METADATA</p>
              </div>}
            <button onClick={reset} className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white w-8 h-8 rounded-full text-xs flex items-center justify-center transition-all hover:rotate-90 duration-300">✕</button>
          </>
        )}
      </div>

      {/* Controls Strip */}
      <div className="p-5 space-y-3 bg-gradient-to-t from-black/80 to-transparent">
        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs backdrop-blur-sm">{error}</div>}

        {isCleaned && !removing && (
          <div className="flex items-center gap-3 bg-lime-400/10 border border-lime-400/20 p-3 rounded-xl">
            <span className="text-lime-400 text-sm font-medium flex-1">✓ Metadata stripped successfully.</span>
            <button 
            data-umami-event="downloaded_image"
            onClick={handleDownload} className="bg-lime-400 text-black text-xs font-black px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all duration-300 uppercase tracking-wider">
              Download
            </button>
          </div>
        )}

        {result && !loading && !isCleaned && (
          <div className="space-y-3">
            <div className={`flex items-center justify-between p-3 rounded-xl text-sm border backdrop-blur-sm ${result.has_ai ? 'bg-amber-400/10 border-amber-400/20 text-amber-300' : 'bg-lime-400/10 border-lime-400/20 text-lime-300'}`}>
              <span className="font-bold tracking-wide">{result.has_ai ? '⚠ AI METADATA DETECTED' : '✓ CLEAN IMAGE'}</span>
              {result.has_ai && result.sources.length > 0 && <span className="text-[10px] opacity-60 font-mono">{result.sources.join(' | ')}</span>}
            </div>

            {result.tools.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {result.tools.map(tool => (<span key={tool} className="px-3 py-1 bg-white/5 text-white/80 rounded-full text-[11px] font-medium border border-white/5 backdrop-blur-sm">{tool}</span>))}
              </div>
            )}

            {Object.keys(result.fields).length > 0 && (
              <details className="group border border-white/5 rounded-xl backdrop-blur-sm">
                <summary className="p-3 cursor-pointer text-white/40 hover:text-white/80 font-medium text-xs tracking-widest transition-colors">RAW DATA ({Object.keys(result.fields).length})</summary>
                <div className="p-3 pt-0 border-t border-white/5 max-h-28 overflow-y-auto space-y-1.5 font-mono text-[10px] text-white/30">
                  {Object.entries(result.fields).map(([key, value]) => (<div key={key}><span className="text-white/50">{key}:</span> {value.length > 80 ? value.slice(0, 80) + '…' : value}</div>))}
                </div>
              </details>
            )}

            {result.has_ai && (
              <button 
              data-umami-event="strip_metadata"
              onClick={handleRemove} disabled={removing} className="w-full py-3.5 bg-lime-400 hover:bg-lime-300 text-black text-sm font-black rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider hover:shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                {removing ? 'PROCESSING...' : 'REMOVE AI METADATA'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
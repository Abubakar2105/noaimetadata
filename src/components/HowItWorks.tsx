export default function HowItWorks() {
  const steps = [
    { num: '01', text: 'Upload Image', sub: 'Select your file' },
    { num: '02', text: 'Deep Scan', sub: 'Analyze metadata' },
    { num: '03', text: 'Strip Data', sub: 'Remove AI traces' },
    { num: '04', text: 'Download', sub: 'Get clean file' },
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to remove AI metadata from an image',
    description:
      'Remove AI metadata, C2PA Content Credentials, and EXIF data from a PNG or JPEG image in four steps.',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.text,
      text: s.sub,
    })),
  };

  return (
    // Added border-t and a glowing box shadow to the top border
    <div className="relative border-t border-white/5 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="absolute top-0 left-1/4 right-1/4 h-px shadow-[0_0_15px_rgba(163,230,53,0.5)] bg-lime-400/30"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {steps.map((s) => (
          <div key={s.num} className="group">
            <div className="text-6xl md:text-7xl font-black text-white/[0.03] group-hover:text-lime-400/10 transition-colors duration-700 tracking-tighter">
              {s.num}
            </div>
            <h3 className="text-lg font-bold text-white/80 mt-2 tracking-tight">{s.text}</h3>
            <p className="text-xs text-white/30 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
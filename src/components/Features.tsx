export default function Features() {
  const features = [
    { icon: '🛡️', title: 'C2PA Stripping', desc: 'Removes Adobe/Google/OpenAI provenance signatures.' },
    { icon: '🧹', title: 'Deep Cleaning', desc: 'Wipes Stable Diffusion & DALL-E generation parameters.' },
    { icon: '🔒', title: '100% Private', desc: 'Processed in memory. No images stored or logged.' },
    { icon: '🖼️', title: 'Zero Quality Loss', desc: 'Only metadata text is modified. Pixels untouched.' },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {features.map((f) => (
        <div key={f.title} className="border rounded-md p-3 bg-gray-50">
          <div className="text-lg mb-1">{f.icon}</div>
          <h3 className="text-xs font-bold text-gray-800 mb-0.5">{f.title}</h3>
          <p className="text-[10px] text-gray-500 leading-tight">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
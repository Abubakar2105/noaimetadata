import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GUIDES, getGuide } from "@/lib/guides";
import { SITE } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `${SITE.url}/remove/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: `/remove/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      siteName: SITE.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE.url}/remove/${guide.slug}`;

  // HowTo schema is built from the "how to" section's steps so the guide is
  // eligible for step-based rich results; FAQPage covers the Q&A block.
  const howToSection = guide.sections.find((s) =>
    /how to/i.test(s.heading)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: guide.title,
        description: guide.metaDescription,
        mainEntityOfPage: url,
        author: { "@id": `${SITE.url}/#organization` },
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      ...(howToSection
        ? [
            {
              "@type": "HowTo",
              name: guide.title,
              description: guide.intro,
              step: howToSection.body.map((text, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                text,
              })),
            },
          ]
        : []),
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: guide.title,
            item: url,
          },
        ],
      },
    ],
  };

  const related = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 4);

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient glow to match the homepage hero */}
      <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-lime-500/20 rounded-full blur-[150px] pointer-events-none"></div>

      <article className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-white/30 mb-8 tracking-wider uppercase">
          <Link href="/" className="hover:text-lime-400 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-white/10">/</span>
          <span className="text-white/50">{guide.eyebrow}</span>
        </nav>

        <header className="space-y-6 border-b border-white/5 pb-12">
          <p className="text-xs font-bold tracking-[0.3em] text-lime-400 uppercase">
            {guide.eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
            {guide.title}
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            {guide.intro}
          </p>
          <Link
            href="/#tool"
            className="inline-flex items-center gap-2 text-sm font-bold text-black bg-lime-400 hover:bg-lime-300 transition-colors px-6 py-3 rounded-full"
          >
            Open the free tool →
          </Link>
        </header>

        {/* Body sections */}
        <div className="space-y-16 py-16">
          {guide.sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter">
                {section.heading}
              </h2>
              <div className="space-y-4 text-white/40 leading-relaxed text-sm">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* FAQ */}
        <section className="border-t border-white/5 pt-12 space-y-6">
          <h2 className="text-3xl font-black tracking-tighter text-white/10">
            FAQ
          </h2>
          <div className="divide-y divide-white/5">
            {guide.faqs.map((faq, i) => (
              <details key={i} className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between text-lg font-medium text-white/60 group-hover:text-white transition-colors">
                  {faq.q}
                  <span className="text-xl text-white/20 group-hover:text-lime-400 group-open:rotate-45 transition-all duration-300 ml-4">
                    +
                  </span>
                </summary>
                <div className="mt-4 text-sm text-white/30 leading-relaxed max-w-2xl pr-12">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links to related guides — spreads link equity */}
        <section className="border-t border-white/5 pt-12 mt-16">
          <p className="text-xs font-bold tracking-[0.3em] text-lime-400 uppercase mb-6">
            Related guides
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/remove/${g.slug}`}
                className="border border-white/5 p-5 rounded-2xl hover:border-lime-400/20 transition-colors group"
              >
                <h3 className="text-sm font-bold text-white/80 group-hover:text-lime-400 transition-colors">
                  {g.title}
                </h3>
                <p className="text-xs text-white/30 mt-1 leading-relaxed">
                  {g.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

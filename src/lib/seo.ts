export const SITE = {
  name: "NoAIMetadata",
  url: "https://noaimetadata.vercel.app",
  ogImage: "/preview.avif",
  email: "abubakar16350@gmail.com",
} as const;

/**
 * Structured data injected once, site-wide, in the root layout.
 * WebSite + Organization establish the brand entity; WebApplication
 * describes the tool itself so it is eligible for rich results and
 * gets picked up cleanly by LLM/GEO answer engines.
 */
export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}${SITE.ogImage}`,
  email: SITE.email,
  description:
    "Free tool to remove AI metadata, C2PA Content Credentials, EXIF, XMP, and hidden AI-generation parameters from images.",
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#organization` },
};

export const appSchema = {
  "@type": "WebApplication",
  "@id": `${SITE.url}/#app`,
  name: SITE.name,
  url: SITE.url,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any (Web)",
  browserRequirements: "Requires a modern web browser",
  description:
    "Instantly remove AI metadata, C2PA Content Credentials, EXIF, XMP, and AI-generation tags from PNG and JPEG images. Free, secure, and private.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: { "@id": `${SITE.url}/#organization` },
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema, appSchema],
};

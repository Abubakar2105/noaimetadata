/**
 * Long-tail landing pages, one per keyword cluster.
 *
 * The homepage targets the broad head term ("remove AI metadata"). These
 * guides each own a specific, lower-competition query that real people search
 * ("how to remove C2PA from a PNG", "remove Midjourney metadata"). Each page
 * renders unique intro + body copy plus HowTo/FAQ structured data, so they
 * stand on their own rather than being thin duplicates of the homepage.
 */

export type GuideSection = {
  heading: string;
  body: string[];
};

export type Guide = {
  slug: string;
  /** <h1> / primary keyword */
  title: string;
  /** <title> tag — keep under ~60 chars */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** One-line eyebrow above the H1 */
  eyebrow: string;
  /** Lead paragraph under the H1 */
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "c2pa-metadata",
    title: "How to Remove C2PA Metadata from Images",
    metaTitle: "Remove C2PA Metadata from Images (Free)",
    metaDescription:
      "Remove C2PA Content Credentials and JUMBF manifests from PNG and JPEG images for free. Strip the cryptographic AI provenance signature in seconds.",
    keywords: [
      "remove C2PA metadata",
      "remove C2PA from PNG",
      "strip Content Credentials",
      "remove JUMBF manifest",
      "delete C2PA signature",
    ],
    eyebrow: "C2PA / Content Credentials",
    intro:
      "C2PA (Coalition for Content Provenance and Authenticity) embeds a cryptographic manifest inside your image that labels it as AI-generated. This guide explains what C2PA is and how to strip it from a PNG or JPEG in seconds — with no quality loss.",
    sections: [
      {
        heading: "What is C2PA metadata?",
        body: [
          "C2PA is an open standard backed by Adobe, Microsoft, Google, and OpenAI. When an image is created or edited by a participating AI tool, a tamper-evident manifest is embedded directly into the file. This manifest records that the image was AI-generated or AI-edited, along with a cryptographic signature that platforms can verify.",
          "In PNG files this data lives in a dedicated chunk (often surfaced as a JUMBF / caBX block); in JPEG files it is stored in application segments. Because it is signed, platforms like Instagram, Facebook, and LinkedIn can detect it automatically and attach an \"AI info\" label.",
        ],
      },
      {
        heading: "How to remove C2PA Content Credentials",
        body: [
          "Upload your PNG or JPEG to the tool at the top of the site. It scans the file and reports every metadata block it finds, including any C2PA manifest.",
          "Click remove. The tool rewrites the file without the C2PA chunk and returns a clean copy. Only the metadata is touched — every pixel of your image stays identical to the original.",
          "Download the cleaned file. The cryptographic provenance signature is gone, so downstream platforms no longer see a Content Credentials label.",
        ],
      },
      {
        heading: "Does removing C2PA change my image?",
        body: [
          "No. Stripping C2PA only removes text and manifest data attached to the file. The visual pixels are untouched and the image looks identical. File size usually drops slightly because the manifest can add 50–100 KB.",
        ],
      },
    ],
    faqs: [
      { q: "Is removing C2PA legal?", a: "Yes. C2PA is metadata attached to a file you own. Removing it is legal, though you should still follow the terms of any platform where you post the image." },
      { q: "Will the image look different after removing C2PA?", a: "No. Only the metadata manifest is removed. The pixels are byte-for-byte identical, so there is zero visible quality change." },
      { q: "Does this work on both PNG and JPEG?", a: "Yes. The tool detects and removes C2PA data from both PNG chunks and JPEG application segments." },
    ],
  },
  {
    slug: "midjourney-metadata",
    title: "How to Remove Midjourney Metadata from Images",
    metaTitle: "Remove Midjourney Metadata (Free Tool)",
    metaDescription:
      "Remove hidden Midjourney metadata, prompts, and job IDs from your generated images for free. Strip the embedded data before you post your art.",
    keywords: [
      "remove Midjourney metadata",
      "strip Midjourney prompt from image",
      "Midjourney metadata remover",
      "remove Midjourney job id",
    ],
    eyebrow: "Midjourney",
    intro:
      "Images from Midjourney can carry embedded metadata that reveals your prompt and job details. This guide shows how to remove Midjourney metadata so your prompts stay private and your images post cleanly.",
    sections: [
      {
        heading: "What metadata does Midjourney add?",
        body: [
          "Midjourney images can include EXIF and XMP fields as well as description text that may contain your prompt or a job identifier. Anyone who inspects the file can read this data with standard tools.",
          "For creators who treat prompts as intellectual property, this is a real leak: your exact wording and workflow are exposed to anyone who downloads the image.",
        ],
      },
      {
        heading: "How to strip Midjourney metadata",
        body: [
          "Upload the image to the scanner at the top of the page. It lists the EXIF, XMP, and text fields it finds.",
          "Remove the metadata with one click and download the cleaned image. Your prompt and any job IDs are wiped, and the picture itself is unchanged.",
        ],
      },
    ],
    faqs: [
      { q: "Can people see my Midjourney prompt in an image?", a: "Sometimes. Prompts or job references can be stored in the image's text metadata. Stripping the metadata removes them." },
      { q: "Does removing metadata reduce Midjourney image quality?", a: "No. Only the text metadata is removed; the image pixels are untouched." },
    ],
  },
  {
    slug: "stable-diffusion-parameters",
    title: "How to Remove Stable Diffusion Parameters from PNG",
    metaTitle: "Remove Stable Diffusion Metadata from PNG",
    metaDescription:
      "Remove Stable Diffusion, ComfyUI, and A1111 generation parameters from PNG files for free. Strip prompts, seeds, and model data from the tEXt chunks.",
    keywords: [
      "remove Stable Diffusion parameters",
      "strip Stable Diffusion metadata from PNG",
      "remove ComfyUI metadata",
      "remove A1111 parameters",
      "delete PNG tEXt chunk",
    ],
    eyebrow: "Stable Diffusion / ComfyUI / A1111",
    intro:
      "Stable Diffusion tools like AUTOMATIC1111 and ComfyUI write your full generation parameters — prompt, negative prompt, seed, sampler, CFG scale, and model — directly into the PNG. This guide shows how to remove them.",
    sections: [
      {
        heading: "Where Stable Diffusion stores parameters",
        body: [
          "AUTOMATIC1111 and ComfyUI save generation data inside PNG text chunks (tEXt, zTXt, iTXt). Open the file in any metadata viewer and you can read the entire prompt, the negative prompt, the seed, the sampler, the CFG scale, and the checkpoint name.",
          "This is convenient for reproducing an image, but it also means anyone you share the PNG with can reconstruct your exact workflow.",
        ],
      },
      {
        heading: "How to remove the parameters",
        body: [
          "Upload your PNG. The scanner reads the tEXt / zTXt / iTXt chunks and shows the embedded parameters.",
          "Click remove to rewrite the PNG without those chunks, then download the clean file. The image is pixel-identical; only the parameter text is gone.",
        ],
      },
    ],
    faqs: [
      { q: "Which Stable Diffusion tools does this work with?", a: "It removes parameter chunks written by AUTOMATIC1111, ComfyUI, InvokeAI, and other tools that store data in PNG text chunks." },
      { q: "Will removing parameters break the PNG?", a: "No. The tool rewrites a valid PNG without the text chunks. It opens normally everywhere; it just no longer carries the generation data." },
    ],
  },
  {
    slug: "dalle-metadata",
    title: "How to Remove DALL-E Metadata and Content Credentials",
    metaTitle: "Remove DALL-E Metadata & Credentials",
    metaDescription:
      "Remove DALL-E and ChatGPT image metadata, including C2PA Content Credentials, from your images for free. Strip the AI provenance label in seconds.",
    keywords: [
      "remove DALL-E metadata",
      "remove ChatGPT image metadata",
      "strip DALL-E Content Credentials",
      "remove OpenAI C2PA",
    ],
    eyebrow: "DALL-E / ChatGPT",
    intro:
      "Images generated by DALL-E and ChatGPT include C2PA Content Credentials that flag them as AI-generated. This guide explains how to remove DALL-E metadata and that provenance signature.",
    sections: [
      {
        heading: "What DALL-E embeds in images",
        body: [
          "OpenAI attaches C2PA Content Credentials to DALL-E and ChatGPT image output. This is a signed manifest that identifies the image as AI-generated and can be read by any C2PA-aware platform.",
          "Standard EXIF and XMP fields may also be present depending on how the file was saved or exported.",
        ],
      },
      {
        heading: "How to remove DALL-E metadata",
        body: [
          "Upload the image to the tool at the top of the page. It detects the C2PA manifest and any EXIF/XMP data.",
          "Remove and download. The Content Credentials signature and other metadata are stripped, and the image itself is unchanged.",
        ],
      },
    ],
    faqs: [
      { q: "Do DALL-E images have a hidden AI label?", a: "Yes. They carry C2PA Content Credentials that mark them as AI-generated. Removing the metadata strips that signature." },
      { q: "Does this work for ChatGPT-generated images too?", a: "Yes. ChatGPT image output uses the same C2PA Content Credentials, which the tool removes." },
    ],
  },
  {
    slug: "exif-data",
    title: "How to Remove EXIF Data from Photos",
    metaTitle: "Remove EXIF Data from Photos (Free)",
    metaDescription:
      "Remove EXIF metadata from JPEG and PNG photos for free — including GPS location, camera model, and timestamps. Protect your privacy before sharing.",
    keywords: [
      "remove EXIF data",
      "strip EXIF from photo",
      "remove GPS location from photo",
      "delete image metadata",
      "EXIF remover",
    ],
    eyebrow: "EXIF / Privacy",
    intro:
      "Photos from phones and cameras store EXIF metadata that can include your GPS location, device model, and the exact time the photo was taken. This guide shows how to remove EXIF data before you share an image.",
    sections: [
      {
        heading: "What EXIF data reveals",
        body: [
          "EXIF (Exchangeable Image File Format) records camera settings, the device make and model, timestamps, and — most sensitively — GPS coordinates. A single photo can pinpoint where you live or work.",
          "Most social platforms strip some of this on upload, but many messaging apps and direct file transfers keep it intact. Removing it yourself is the only reliable guarantee.",
        ],
      },
      {
        heading: "How to remove EXIF data",
        body: [
          "Upload your JPEG or PNG. The scanner lists the EXIF fields it finds, including any embedded GPS location.",
          "Click remove and download. All EXIF fields are cleared and the image looks exactly the same.",
        ],
      },
    ],
    faqs: [
      { q: "Does removing EXIF delete GPS location?", a: "Yes. GPS coordinates are stored in EXIF, so removing EXIF data clears the location from the file." },
      { q: "Will the photo lose quality?", a: "No. EXIF is text metadata. Removing it does not touch the image pixels, so there is no quality loss." },
    ],
  },
  {
    slug: "gemini-metadata",
    title: "How to Remove Gemini (Imagen) AI Metadata",
    metaTitle: "Remove Gemini AI Metadata & Label",
    metaDescription:
      "Remove Google Gemini and Imagen metadata and C2PA Content Credentials from images for free. Learn what the tool can strip and what SynthID leaves behind.",
    keywords: [
      "remove Gemini metadata",
      "remove Google Imagen metadata",
      "remove Gemini AI label",
      "strip Gemini Content Credentials",
      "remove SynthID",
    ],
    eyebrow: "Google Gemini / Imagen",
    intro:
      "Images from Google Gemini and Imagen carry both C2PA metadata and a SynthID pixel watermark. This guide explains how to remove the Gemini metadata and AI label, and is honest about the one part a metadata tool cannot touch.",
    sections: [
      {
        heading: "What Gemini embeds in images",
        body: [
          "Google labels Gemini and Imagen output two ways. The first is C2PA Content Credentials plus IPTC/XMP metadata written into the file — a readable, removable manifest that marks the image as AI-generated.",
          "The second is SynthID: an invisible watermark encoded into the pixels themselves. It is not metadata, so no metadata remover — including this one — can strip it without altering the image.",
        ],
      },
      {
        heading: "How to remove Gemini metadata",
        body: [
          "Upload your image to the tool at the top of the page. It detects the C2PA manifest and any IPTC/XMP fields Gemini added.",
          "Click remove and download. The Content Credentials and metadata AI label are stripped, so platforms reading the file's metadata no longer see a Gemini tag.",
        ],
      },
      {
        heading: "What this cannot remove",
        body: [
          "SynthID lives in the pixels, not the metadata. If a platform detects AI using SynthID rather than the C2PA manifest, removing metadata will not hide it. Be honest with yourself about which label you are trying to clear — this tool removes the metadata layer, not pixel watermarks.",
        ],
      },
    ],
    faqs: [
      { q: "Can I remove the Gemini AI label?", a: "You can remove the C2PA and IPTC/XMP metadata label that Gemini writes into the file. You cannot remove the SynthID pixel watermark with a metadata tool." },
      { q: "What is SynthID?", a: "SynthID is Google's invisible watermark embedded in the image pixels. It is separate from metadata and survives metadata removal." },
    ],
  },
  {
    slug: "chatgpt-metadata",
    title: "How to Remove ChatGPT Image Metadata",
    metaTitle: "Remove ChatGPT Image Metadata (Free)",
    metaDescription:
      "Remove ChatGPT and DALL-E image metadata, including C2PA Content Credentials, for free. Strip the AI provenance label from your generated images.",
    keywords: [
      "remove ChatGPT metadata",
      "remove ChatGPT image metadata",
      "strip ChatGPT C2PA",
      "remove ChatGPT AI label",
      "remove OpenAI Content Credentials",
    ],
    eyebrow: "ChatGPT / OpenAI",
    intro:
      "Images generated in ChatGPT include C2PA Content Credentials that mark them as AI-created. This guide shows how to remove ChatGPT image metadata and that provenance label in seconds.",
    sections: [
      {
        heading: "What ChatGPT adds to images",
        body: [
          "ChatGPT image output (powered by DALL-E and GPT image models) is signed with C2PA Content Credentials. This is a cryptographic manifest that any C2PA-aware platform — Instagram, Facebook, LinkedIn — can read to attach an \"AI info\" label.",
          "Depending on how the image was saved, standard EXIF and XMP fields may also be present.",
        ],
      },
      {
        heading: "How to remove ChatGPT metadata",
        body: [
          "Upload the image to the scanner at the top of the page. It detects the C2PA manifest and any EXIF/XMP data ChatGPT wrote.",
          "Click remove and download the clean file. The Content Credentials signature is gone and the picture itself is unchanged.",
        ],
      },
    ],
    faqs: [
      { q: "Do ChatGPT images have a hidden AI label?", a: "Yes. They carry C2PA Content Credentials that identify them as AI-generated. Removing the metadata strips that label." },
      { q: "Is the DALL-E guide the same thing?", a: "They overlap — ChatGPT image generation uses OpenAI's image models. Both carry the same C2PA Content Credentials that this tool removes." },
    ],
  },
  {
    slug: "ai-label",
    title: "How to Remove the AI Label from an Image",
    metaTitle: "How to Remove the AI Label from Images",
    metaDescription:
      "How to remove the 'AI info' or 'Made with AI' label from images on Instagram, Facebook, and LinkedIn by stripping C2PA Content Credentials metadata.",
    keywords: [
      "remove AI label from image",
      "remove Made with AI label",
      "remove AI info label Instagram",
      "how to remove AI label",
      "stop AI label on Facebook",
    ],
    eyebrow: "AI Label / Provenance",
    intro:
      "The \"AI info\" or \"Made with AI\" label that platforms attach to images usually comes from C2PA Content Credentials metadata. This guide explains where the label comes from and how to remove it.",
    sections: [
      {
        heading: "Where the AI label comes from",
        body: [
          "When you upload an image, platforms like Instagram, Facebook, and LinkedIn scan it for C2PA Content Credentials — a signed manifest that AI tools embed to declare the image was AI-generated or AI-edited. If they find it, they show an AI label.",
          "That label is driven by metadata in most cases, which means removing the metadata removes the trigger. Some platforms also use invisible pixel watermarks (like Google's SynthID); those are not metadata and cannot be stripped this way.",
        ],
      },
      {
        heading: "How to remove the AI label",
        body: [
          "Upload your PNG or JPEG to the tool at the top of the page. It scans for C2PA Content Credentials and every other metadata block in the file.",
          "Click remove to rewrite the file without the C2PA manifest, then download it. With no Content Credentials left, platforms reading metadata no longer attach the AI label.",
          "Post the cleaned file. Note that if you edit or re-export it in another AI-aware app, a new manifest can be re-added.",
        ],
      },
      {
        heading: "When removing metadata is not enough",
        body: [
          "If a platform detects AI through a pixel watermark rather than metadata, stripping metadata will not remove the label. Metadata removal clears the C2PA / EXIF / XMP layer — it does not alter the image pixels, so pixel-based watermarks survive.",
        ],
      },
    ],
    faqs: [
      { q: "Why do my images get a 'Made with AI' label?", a: "Because the file carries C2PA Content Credentials that platforms read on upload. Removing that metadata removes the trigger for the label." },
      { q: "Does this always remove the AI label?", a: "It removes labels driven by metadata (C2PA, EXIF, XMP). It cannot remove labels based on invisible pixel watermarks such as SynthID." },
      { q: "Which platforms use these labels?", a: "Instagram, Facebook, Threads, and LinkedIn are the main ones that read C2PA Content Credentials and display an AI label." },
    ],
  },
  {
    slug: "adobe-firefly-metadata",
    title: "How to Remove Adobe Firefly Content Credentials",
    metaTitle: "Remove Adobe Firefly Content Credentials",
    metaDescription:
      "Remove Adobe Firefly and Photoshop Content Credentials (C2PA) from images for free. Strip the AI-generated provenance manifest in seconds.",
    keywords: [
      "remove Adobe Firefly metadata",
      "remove Content Credentials Photoshop",
      "strip Adobe C2PA",
      "remove Firefly AI label",
    ],
    eyebrow: "Adobe Firefly / Photoshop",
    intro:
      "Adobe Firefly and Photoshop's generative features attach Content Credentials (C2PA) to images. This guide shows how to remove the Adobe Firefly metadata and provenance manifest.",
    sections: [
      {
        heading: "What Adobe attaches to images",
        body: [
          "Adobe is a founding member of the C2PA / Content Authenticity Initiative. Firefly output and Photoshop generative edits embed a signed Content Credentials manifest recording the AI involvement, along with XMP metadata.",
          "Any C2PA-aware platform can read this manifest and label the image as AI-generated or AI-edited.",
        ],
      },
      {
        heading: "How to remove Adobe Content Credentials",
        body: [
          "Upload the image to the scanner at the top of the page. It detects the C2PA manifest and Adobe's XMP metadata packets.",
          "Click remove and download. The Content Credentials and XMP data are stripped, and the image pixels are untouched.",
        ],
      },
    ],
    faqs: [
      { q: "Does Photoshop add Content Credentials automatically?", a: "Generative AI features can attach Content Credentials. This tool removes the resulting C2PA manifest and XMP metadata from the exported file." },
      { q: "Will removing credentials change my Photoshop export?", a: "No. Only the metadata manifest is removed. The exported image looks identical." },
    ],
  },
  {
    slug: "grok-metadata",
    title: "How to Remove Grok AI Image Metadata",
    metaTitle: "Remove Grok AI Image Metadata (Free)",
    metaDescription:
      "Remove Grok (xAI) generated image metadata and any embedded AI provenance data for free. Strip EXIF, XMP, and C2PA blocks before you share.",
    keywords: [
      "remove Grok metadata",
      "remove Grok AI label",
      "strip xAI image metadata",
      "remove Grok Content Credentials",
    ],
    eyebrow: "Grok / xAI",
    intro:
      "Images generated by Grok can carry embedded metadata and provenance data that identify them as AI-created. This guide shows how to scan a Grok image and remove that metadata.",
    sections: [
      {
        heading: "What Grok images may contain",
        body: [
          "Depending on the model and how the file is exported, Grok images can include EXIF and XMP metadata and, where provenance standards are applied, a C2PA manifest declaring the image AI-generated.",
          "The reliable move is to scan the file and see exactly what is embedded rather than assume — the tool reports every block it finds.",
        ],
      },
      {
        heading: "How to remove Grok metadata",
        body: [
          "Upload the image to the tool at the top of the page. It lists every EXIF, XMP, and C2PA block detected in the file.",
          "Click remove and download the clean copy. All detected metadata is stripped while the image pixels stay identical.",
        ],
      },
    ],
    faqs: [
      { q: "Do Grok images carry an AI label?", a: "Where provenance metadata is present, this tool detects and removes it. Upload your image to see exactly what is embedded." },
      { q: "Does removing metadata affect the image?", a: "No. Only metadata is removed. The pixels are unchanged, so there is no quality loss." },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

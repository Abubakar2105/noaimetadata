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
      "Removing C2PA metadata means stripping the signed Content Credentials manifest that AI tools embed inside your image to declare it was made or edited with AI. That manifest is what platforms read to attach an AI label, and because it is cryptographically signed, you cannot quietly edit it — the practical move is to remove it entirely. This guide explains what C2PA actually is, where it hides in a PNG or JPEG, and how to clear it in seconds without touching a single pixel.",
    sections: [
      {
        heading: "What C2PA actually is",
        body: [
          "C2PA stands for the Coalition for Content Provenance and Authenticity, a standard built by Adobe, Microsoft, Google, OpenAI, and a long list of camera and software makers. The goal is provenance: a way to record where an image came from and what was done to it, in a form that can be cryptographically verified rather than taken on faith. When a participating tool creates or edits an image, it writes a signed manifest into the file describing that history.",
          "The word that matters most is signed. A C2PA manifest is not a loose text tag you can open and rewrite. It carries a cryptographic signature tied to an issuer, so any tampering breaks the signature and the manifest reads as invalid. That design is deliberate — it is meant to be hard to forge. The side effect is that if you want the label gone, editing the manifest is not an option; removing the whole block is.",
          "It helps to separate two ideas people often blur together. C2PA provenance is metadata: it lives in the file container alongside the pixels, and it can be removed. An invisible pixel watermark, like Google's SynthID, lives inside the image data itself and is a completely different mechanism. This guide is about the metadata layer. No metadata tool can touch a pixel watermark without altering the picture.",
        ],
      },
      {
        heading: "Where the manifest hides in your file",
        body: [
          "In a PNG, C2PA data is stored in a dedicated chunk, usually surfaced by inspectors as a JUMBF or caBX block sitting alongside the normal image chunks. In a JPEG, it lives in application marker segments near the start of the file. Either way it is invisible when you look at the picture — you would only ever find it by opening the file in a metadata viewer or a Content Credentials inspector like Adobe's Verify page.",
          "The manifest is rarely alone. Depending on how the file was exported and what software it passed through, you can also find ordinary EXIF fields, an XMP block, and PNG text chunks riding along. A file that went through a download, a resize, or a third-party editor often picks up extra provenance tags on top of the original C2PA data, which is why scanning first — rather than assuming — is the reliable approach.",
        ],
      },
      {
        heading: "How to remove C2PA Content Credentials",
        body: [
          "You can strip the C2PA manifest, along with EXIF, XMP, and PNG text chunks, in a few seconds, and the pixels come out untouched. Here is the process.",
          "Step 1: Open the tool at the top of this site and drop your PNG or JPEG into the upload area. It works directly on the file you give it and does not resample or re-encode the image data.",
          "Step 2: Let it scan. The tool reads every metadata block in the file, including the signed C2PA manifest, so you can see exactly what is embedded before you clear it.",
          "Step 3: Remove and download the cleaned copy. The manifest and the assorted EXIF and XMP tags are gone, and the picture is bit-for-bit identical where it counts. Drop the result back into a C2PA inspector to confirm no signed credentials remain.",
        ],
      },
      {
        heading: "Does removing C2PA change my image?",
        body: [
          "No. C2PA, EXIF, and XMP data sit in a separate part of the file from the pixel data, so removing them leaves the picture identical. There is no recompression, no color shift, and no softening — the only thing that changes is the file gets slightly smaller, because a manifest can add anywhere from 50 KB to a few hundred KB depending on what it records.",
          "Be clear-eyed about what this does and does not do. Removing the manifest removes the machine-readable label, not the fact that an image was AI-generated. Use it to control incidental data and presentation, and to clear auto-labeling where that labeling is noise rather than required disclosure — not to misrepresent your work where honesty is expected.",
        ],
      },
    ],
    faqs: [
      { q: "Is removing C2PA legal?", a: "Yes. C2PA is metadata attached to a file you own, and removing it is legal. That said, you should still follow the terms of any platform where you post the image, and honor any context where disclosing AI involvement is genuinely required." },
      { q: "Will the image look different after removing C2PA?", a: "No. Only the metadata manifest is removed. The pixels are byte-for-byte identical, so there is zero visible quality change. The file size usually drops a little because the manifest is gone." },
      { q: "Does this work on both PNG and JPEG?", a: "Yes. The tool detects and removes C2PA data from both PNG chunks (JUMBF / caBX) and JPEG application segments, along with any EXIF and XMP tags in the file." },
      { q: "Can I just edit the manifest instead of removing it?", a: "No. C2PA manifests are cryptographically signed, so any edit breaks the signature and reads as invalid. Removing the block entirely is the practical way to clear the label." },
    ],
  },
  {
    slug: "midjourney-metadata",
    title: "How to Remove Midjourney Metadata from Images",
    metaTitle: "Remove Midjourney Metadata & Prompts",
    metaDescription:
      "Learn how to remove Midjourney metadata, prompts, and job IDs from your images without touching a single pixel. A clear walkthrough of what gets embedded and how to strip it.",
    keywords: [
      "how to remove Midjourney metadata",
      "strip Midjourney prompt from image",
      "Midjourney metadata remover",
      "remove Midjourney job id",
      "remove AI metadata from Midjourney",
      "Midjourney EXIF removal",
      "hide Midjourney prompt",
    ],
    eyebrow: "Midjourney",
    intro:
      "Removing Midjourney metadata means stripping the EXIF, XMP, and embedded description fields that can carry your prompt, your job ID, and other traces of how the image was made. If you treat your prompts as your own work, this data is a quiet leak, because anyone who downloads the file can read it back. This guide covers exactly what Midjourney writes into an image, why you might want it gone, and how to clear it cleanly without altering the picture.",
    sections: [
      {
        heading: "What Midjourney actually writes into your image",
        body: [
          "When you upscale and save a Midjourney image, the file you get is more than pixels. Depending on where you saved it from and how it was exported, it can carry EXIF fields, an XMP block, and description or comment text. That text is where the interesting stuff hides: fragments of your prompt, a job identifier that ties the image back to your account's generation, and software tags that mark how the file was produced.",
          "The prompt is the part most creators care about. Your prompt is the actual craft, the phrasing and the parameters you tuned to get a specific look. When that phrasing rides along inside the file, anyone who opens the image in a metadata viewer can read your exact wording. For a hobbyist that is harmless, but for someone selling prints, pitching a client, or protecting a style they worked hard to develop, it is a direct handover of the recipe.",
          "It is worth being precise here: what Midjourney embeds has changed over time and varies by how you export the file. A screenshot carries almost nothing. A direct download from the web app or a saved file from Discord can carry more. The only reliable way to know what is in a specific file is to scan it, which is the first thing the tool does.",
        ],
      },
      {
        heading: "Why people strip Midjourney metadata",
        body: [
          "The clearest reason is protecting your prompts. If your workflow is part of your competitive edge, you do not want to ship it inside every image you post. Stripping the metadata keeps the wording of your prompt and the parameters you chose to yourself, so the image can travel without carrying the instructions for how to remake it.",
          "There is also a presentation angle. A designer using a Midjourney render as a base layer, a placeholder, or one element in a bigger composite usually does not want the file broadcasting a job ID or an AI tag. Clearing the metadata gives you a plain image that behaves like any other file you would hand to a client or drop into a portfolio.",
          "And there is basic privacy. Metadata blocks can carry timestamps and identifiers you never intended to publish. Removing them keeps incidental details from traveling with a file you share publicly. To be straight about it, though: removing metadata does not change the fact that an image was AI-generated. It controls what the file discloses, not what the file is. Use it to protect your prompts and clean up presentation, not to misrepresent your work where disclosure is expected.",
        ],
      },
      {
        heading: "How to remove Midjourney metadata with NoAIMetadata",
        body: [
          "You can strip the EXIF, XMP, description text, and any PNG text chunks from a Midjourney image in a few seconds, and the pixels come out untouched. Here is the process.",
          "Step 1: Open the tool at the top of this site and drop your Midjourney PNG or JPEG into the upload area. Use the original downloaded file rather than a screenshot, because the original is what actually contains the metadata you want to see and remove.",
          "Step 2: Let the tool scan the file. It reads the embedded blocks and shows you what is in there, including any prompt text or job ID sitting in the EXIF, XMP, or comment fields, so you know exactly what you are clearing before you clear it.",
          "Step 3: Remove the metadata and download the cleaned image. The output is the same picture with the prompt, job ID, and tags stripped out. Nothing about the visible image changes.",
          "Step 4: If the file will pass through another editor before you publish, re-scan it afterward. Some apps write their own metadata on export, so stripping last, right before you post, is the safest order.",
        ],
      },
      {
        heading: "Does removing metadata hurt image quality?",
        body: [
          "No. Metadata lives in a separate part of the file from the image data, so removing it does not touch the picture. The tool rewrites the file container without re-compressing the image, which means no new artifacts, no color shift, and no loss of detail. The only thing that changes is the file gets slightly smaller once the extra blocks are gone.",
          "This is the reason not to reach for the screenshot shortcut people often use to strip prompts. A screenshot does drop the original metadata, but it also re-encodes the visible image and usually changes the dimensions and color along the way. Stripping the metadata directly leaves you a file that is pixel-for-pixel the same as your upscale, just without the embedded prompt.",
        ],
      },
      {
        heading: "The honest limit",
        body: [
          "Metadata removal clears data that sits in the file container. It reliably removes the EXIF, XMP, and text fields that can carry your prompt and job ID. What it cannot do is reach a watermark encoded into the pixels themselves, if one is present, because that lives in the image data rather than the metadata.",
          "So think of this as controlling the file's disclosure layer. It removes the readable traces that expose your prompt and workflow, which is what most Midjourney users are actually worried about. Be clear-eyed that it is a metadata tool, not a pixel editor, and use it for what it does well.",
        ],
      },
    ],
    faqs: [
      { q: "Can people really see my Midjourney prompt in a saved image?", a: "Sometimes, yes. Depending on how the file was exported, your prompt text or a job ID can sit in the image's EXIF, XMP, or comment fields, where anyone with a metadata viewer can read it. Scanning the file shows you exactly what is present, and stripping it removes those fields." },
      { q: "How do I remove the Midjourney job ID from a file?", a: "Upload the image to the tool, let it scan the embedded metadata, then strip it and download the cleaned copy. The job ID lives in the same EXIF or text fields as the prompt, so a single removal pass clears both along with any other tags." },
      { q: "Does removing metadata reduce Midjourney image quality?", a: "No. Metadata sits in a separate section of the file from the pixels, and the tool rewrites the container without re-compressing the image. There is no quality loss, no color change, and no resizing. The cleaned file matches the original pixel for pixel." },
      { q: "Is stripping the metadata better than taking a screenshot?", a: "Yes. A screenshot removes metadata but re-encodes the picture, which can soften it and change its size and color. Stripping the metadata directly gives you a pixel-identical file with the prompt and job data gone, which is what you actually want." },
    ],
  },
  {
    slug: "stable-diffusion-parameters",
    title: "How to Remove Stable Diffusion Parameters from a PNG",
    metaTitle: "Remove Stable Diffusion Metadata from PNG",
    metaDescription:
      "Learn how to remove Stable Diffusion, ComfyUI, and A1111 generation parameters from a PNG — prompt, negative prompt, seed, sampler, and model — without touching a pixel.",
    keywords: [
      "how to remove Stable Diffusion parameters",
      "strip Stable Diffusion metadata from PNG",
      "remove ComfyUI metadata",
      "remove A1111 parameters",
      "delete PNG tEXt chunk",
      "hide Stable Diffusion prompt",
      "remove generation data from PNG",
    ],
    eyebrow: "Stable Diffusion / ComfyUI / A1111",
    intro:
      "Removing Stable Diffusion parameters means clearing the text chunks that AUTOMATIC1111, ComfyUI, and other front-ends write straight into your PNG — the full prompt, the negative prompt, the seed, the sampler, the CFG scale, and the checkpoint name. That data is the complete recipe for your image, and it sits in plain text inside the file, readable by anyone who opens it in a metadata viewer. This guide covers exactly where those parameters live, why you might want them gone, and how to strip them without re-encoding the picture.",
    sections: [
      {
        heading: "Where Stable Diffusion hides your generation data",
        body: [
          "Local Stable Diffusion tools save generation parameters inside PNG text chunks — the tEXt, zTXt, and iTXt sections of the file. AUTOMATIC1111 writes a single 'parameters' block, ComfyUI embeds the entire node graph as a 'workflow' and 'prompt' JSON payload, and InvokeAI and others use their own variants of the same idea. Open any of these files in a metadata viewer and the whole thing reads back like a receipt.",
          "That receipt is thorough. It typically includes your positive prompt word for word, your negative prompt, the seed, the sampler and scheduler, the step count, the CFG scale, the model or checkpoint hash, and often the LoRAs and their weights. For ComfyUI the embedded workflow can even be dragged back into the app to reconstruct your exact node setup. It is a genuinely useful feature for reproducing your own work — and exactly why it leaks when you share the file.",
          "The important nuance is that this data survives sharing. Upload the PNG to a forum, a Discord, or a portfolio host that does not strip metadata, and the parameters travel with it. Anyone can lift your prompt and settings and reproduce your style in one click. If your prompt engineering is part of what makes your images yours, that is worth closing off before you post.",
        ],
      },
      {
        heading: "Why people strip Stable Diffusion parameters",
        body: [
          "The main reason is protecting the workflow. A carefully tuned prompt, a specific LoRA stack, and a seed that finally produced the look you wanted represent real effort. Shipping all of it inside every PNG hands that effort to anyone who right-clicks the file. Stripping the parameters lets the image circulate without carrying the instructions to clone it.",
          "There is also a practical, non-secretive angle. Some galleries and printers reject or choke on unexpected text chunks, and a bloated ComfyUI workflow payload can add real weight to a file you are batching by the hundred. Clearing the chunks gives you a lean, standard PNG that behaves predictably everywhere.",
          "To be straight about it: removing the parameters does not hide that an image is AI-generated, and it does not touch any provenance watermark a model or platform might add separately. It removes the generation recipe you embedded, not the fact of how the image was made. Use it to protect your prompts and keep files clean, not to misrepresent the work.",
        ],
      },
      {
        heading: "How to remove Stable Diffusion parameters",
        body: [
          "You can clear the tEXt, zTXt, and iTXt chunks from a Stable Diffusion PNG in a few seconds with NoAIMetadata, and the image data comes out untouched. Here is the process.",
          "Step 1: Open the tool at the top of this site and drop in your PNG. It reads the file directly rather than re-rendering it, so nothing about the picture changes.",
          "Step 2: Let it scan. The tool surfaces the embedded parameter chunks — the A1111 parameters block, the ComfyUI workflow and prompt payloads, and any other text chunks — so you can see the full recipe that was riding along before you clear it.",
          "Step 3: Remove and download. The tool rewrites a valid PNG without those chunks. Open the clean file in a metadata viewer to confirm the parameters are gone and only the image remains.",
        ],
      },
      {
        heading: "Does stripping the chunks damage the PNG?",
        body: [
          "No. Text chunks live in a separate part of the PNG from the actual image data (the IDAT stream), so removing them leaves every pixel bit-for-bit identical. There is no re-compression, no color shift, and no change to dimensions. The file just gets smaller because the parameter payload — which for a heavy ComfyUI workflow can be substantial — is gone.",
          "The output is a fully valid PNG that opens normally in every viewer, editor, and browser. It simply no longer carries the generation data. This is the key difference between clearing metadata and re-saving or screenshotting an image, both of which can degrade quality; stripping chunks does neither.",
        ],
      },
    ],
    faqs: [
      { q: "Which Stable Diffusion tools does this work with?", a: "It removes the parameter chunks written by AUTOMATIC1111, ComfyUI, InvokeAI, Forge, and other front-ends that store generation data in PNG tEXt, zTXt, or iTXt chunks. Upload your file and the tool shows you exactly which blocks it found." },
      { q: "Will removing parameters break the PNG or ComfyUI workflow file?", a: "The PNG itself stays valid and opens everywhere. What you lose is the embedded ComfyUI workflow you could otherwise drag back into the app, so keep an original copy if you still need to reload that graph later." },
      { q: "Can people really see my prompt in a shared PNG?", a: "Yes. If the file still has its text chunks, anyone can open it in a metadata viewer and read your full prompt, negative prompt, seed, and settings. Stripping the chunks is what closes that off." },
      { q: "Does this remove an AI watermark too?", a: "It removes the metadata and generation parameters in the file. It does not alter the pixels, so any invisible pixel-level watermark a model added separately would survive metadata removal." },
    ],
  },
  {
    slug: "dalle-metadata",
    title: "How to Remove DALL-E Metadata and Content Credentials",
    metaTitle: "Remove DALL-E Metadata & Credentials",
    metaDescription:
      "Learn how to remove DALL-E metadata and Content Credentials. Strip C2PA, EXIF, and XMP from OpenAI images without touching a single pixel.",
    keywords: [
      "how to remove DALL-E metadata",
      "remove DALL-E Content Credentials",
      "DALL-E C2PA",
      "strip C2PA from DALL-E images",
      "remove AI metadata from OpenAI images",
      "DALL-E EXIF removal",
      "delete Content Credentials PNG",
    ],
    eyebrow: "DALL-E / OpenAI",
    intro:
      "Removing DALL-E metadata means stripping the Content Credentials and other embedded tags that OpenAI writes into every image, so the file stops announcing where it came from. DALL-E and the images generated through ChatGPT carry a signed C2PA manifest that flags them as AI-generated, and platforms read that manifest to slap an AI label on your work. This guide walks through what OpenAI embeds, why you might want it gone, and how to clear it cleanly.",
    sections: [
      {
        heading: "What OpenAI embeds in DALL-E images",
        body: [
          "Every DALL-E image ships with C2PA Content Credentials, a cryptographically signed manifest that records the file as AI-generated and names OpenAI as the source. Drop a DALL-E PNG into a C2PA inspector like Adobe's Content Credentials Verify page and you will see a signed manifest with an issuer tied to OpenAI, an assertion that the content was created with a generative AI tool, and a timestamp. The signature is what makes it trustworthy to platforms, and it is also what makes it stick.",
          "C2PA is not an OpenAI side project. It is a shared standard backed by Adobe, Microsoft, Google, and OpenAI through the Coalition for Content Provenance and Authenticity. That backing matters because it means the same manifest format is being read across a growing list of apps and sites, not just one vendor's tool.",
          "Alongside the C2PA manifest, a DALL-E file may also carry ordinary EXIF, XMP, or PNG text chunks depending on how the image was exported or passed through other software. These are the same metadata containers any camera or editor uses. A file that went through a download, a resize, or a third-party app can pick up extra XMP provenance tags on top of the original C2PA data, so the manifest is rarely the only thing riding along.",
        ],
      },
      {
        heading: "How platforms turn that manifest into an AI label",
        body: [
          "Platforms read the embedded C2PA manifest and, when they find one that validates, display an AI-generated badge next to your image. This is the whole point of Content Credentials from OpenAI's side. When you upload a DALL-E image somewhere that supports the standard, the site parses the manifest, checks the signature against known issuers, and shows a marker or an info panel saying the image was made with AI.",
          "LinkedIn already does this. Meta has rolled out AI labeling that leans on provenance signals. As more sites adopt C2PA reading, an unmodified DALL-E file will increasingly identify itself the moment it lands somewhere. The label is not something you opted into per upload, it travels inside the file's container and shows up automatically.",
        ],
      },
      {
        heading: "Why people strip DALL-E metadata",
        body: [
          "The most common reason is privacy and presentation control: you do not want every platform auto-tagging your image as AI-generated before anyone even looks at it. A designer using DALL-E for a mood board, a marketer building a mockup, or someone making a personal avatar often just wants a clean file that behaves like any other image, without a provenance panel attached.",
          "There are practical reasons too. Metadata adds weight and can leak details you would rather not ship, like generation timestamps or tool identifiers baked into the manifest. Some workflows break when an unexpected manifest is present, and some pipelines re-sign or reject files with mismatched credentials. Stripping the metadata gives you a plain PNG or JPEG with nothing but the picture.",
          "Worth saying plainly: removing Content Credentials does not make an AI image not an AI image. It removes the machine-readable label, not the fact. Be honest about your work where honesty is expected, and use metadata removal for the cases where the auto-labeling is noise rather than disclosure.",
        ],
      },
      {
        heading: "How to remove DALL-E metadata with NoAIMetadata",
        body: [
          "You can strip the C2PA manifest, EXIF, XMP, and PNG text chunks from a DALL-E image in a few seconds using the tool at the top of this site, and the pixels come out untouched. Here is the process.",
          "Step 1: Drag your DALL-E PNG or JPEG into the upload area. The tool works directly on the file you give it and does not resample or re-encode the image data.",
          "Step 2: Let the tool scan the file. It reads the embedded metadata blocks, including the signed C2PA manifest, the EXIF and XMP tags, and any PNG text chunks, so you can see what is actually in there before you clear it.",
          "Step 3: Remove the metadata and download the cleaned image. The output is the same picture with the manifest and tags stripped out. Drop that new file back into a C2PA inspector to confirm the manifest is gone and no signed credentials remain.",
          "Step 4: Verify before you publish. Check the file in a Content Credentials viewer one more time, especially if it will pass through another editor afterward, since some tools re-add provenance data on export.",
        ],
      },
      {
        heading: "Does removing metadata hurt image quality?",
        body: [
          "No. Stripping metadata does not change a single pixel. C2PA manifests, EXIF, XMP, and PNG text chunks live in separate sections of the file from the actual image data, so removing them leaves the picture bit-for-bit identical where it counts. There is no recompression, no color shift, no softening.",
          "The only thing that shrinks is the file size, because you are dropping the metadata payload. A cleaned PNG opens and displays exactly like the original, just without the provenance baggage. This is the key difference between metadata removal and the kind of editing that degrades an image, and it is why the approach is safe to run on final files.",
        ],
      },
      {
        heading: "The limits: pixel watermarks and re-added credentials",
        body: [
          "Metadata removal clears the C2PA, EXIF, and XMP data, but it cannot touch invisible watermarks baked into the pixels themselves. This is the honest limit. Some AI image systems embed a signal inside the image content, not the metadata, and that kind of watermark survives metadata stripping because it lives in the pixels you are deliberately not altering. If a detector reads pixel-level signals, a clean manifest will not fool it.",
          "The second limit is re-adding. If you take a cleaned image back into an editor or upload it to a service that writes its own provenance, fresh metadata can appear on export. Adobe apps, for instance, can attach Content Credentials when a file passes through them. So the sequence matters: strip last, right before you publish, and re-check the file if anything touches it afterward.",
          "Treat metadata removal for what it is. It is a clean, reliable way to remove the signed label and the assorted EXIF and XMP tags that DALL-E images carry, and it does that without harming the picture. It is not a way to erase every trace that an image was AI-generated, and it should not be sold to yourself as one.",
        ],
      },
    ],
    faqs: [
      { q: "How do I remove DALL-E Content Credentials?", a: "Upload the DALL-E image to the tool, let it scan the file, then strip the C2PA manifest and download the cleaned version. The signed Content Credentials manifest is removed along with any EXIF, XMP, and PNG text chunks, and the pixels stay untouched. Verify the result in a C2PA inspector to confirm no manifest remains." },
      { q: "Does DALL-E add C2PA metadata to every image?", a: "Yes. Images from DALL-E and from image generation in ChatGPT carry C2PA Content Credentials, a signed manifest that marks the file as AI-generated and identifies OpenAI. Depending on how the image was exported or handled afterward, it may also carry EXIF and XMP tags on top of that manifest." },
      { q: "Will removing the metadata change how my DALL-E image looks?", a: "No. C2PA, EXIF, and XMP data sit in separate parts of the file from the image itself, so removing them leaves every pixel exactly as it was. The file gets a little smaller, but there is no recompression, color shift, or loss of detail." },
      { q: "Can metadata removal defeat invisible AI watermarks?", a: "No. Metadata removal clears the C2PA manifest and the EXIF and XMP tags, but it cannot remove watermarks embedded in the pixels themselves. Those live in the image content rather than the metadata, so a pixel-level watermark survives even after the manifest is gone." },
      { q: "Why do platforms show an AI label on my DALL-E images?", a: "Because they read the embedded C2PA manifest. Sites that support Content Credentials parse the signed manifest, validate it against known issuers like OpenAI, and display an AI-generated badge automatically. Remove the manifest and there is nothing for those sites to read, though pixel-based detection is separate." },
      { q: "Will the credentials come back if I edit the file again?", a: "They can. Some editors and services write their own Content Credentials on export, so a cleaned file can pick up fresh metadata if it passes through them afterward. Strip the metadata as the last step before publishing, and re-check the file if any other tool touches it." },
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
      "how to remove EXIF data",
      "remove location from photo before posting",
    ],
    eyebrow: "EXIF / Privacy",
    intro:
      "Removing EXIF data means clearing the hidden record your phone or camera writes into every photo — the GPS coordinates, the device model, the exact date and time, and the camera settings. Most of it is harmless, but the location field is not: a single photo can pin the spot where you live, work, or took the shot. This guide explains what EXIF holds, where it quietly survives, and how to strip it before you share an image.",
    sections: [
      {
        heading: "What EXIF data actually reveals",
        body: [
          "EXIF (Exchangeable Image File Format) is the metadata block cameras and phones embed automatically. It records the make and model of the device, the lens and exposure settings, the exact timestamp down to the second, and — the field that matters most for privacy — the GPS coordinates where the photo was taken. Open a photo in any metadata viewer and you can read all of it in a moment.",
          "The location field is the one worth pausing on. A holiday photo posted to a forum, a picture of an item for sale, or a shot of your desk can carry the precise latitude and longitude of your home. People have been located from a single unstripped image. That is not a hypothetical; it is the reason privacy guides consistently recommend clearing EXIF before posting anything from a personal device.",
          "It is worth being accurate about scope. Not every photo carries GPS — it depends on whether location services were on for the camera — and formats differ. JPEGs from phones are the classic case; PNG screenshots carry far less. Rather than assume, the tool scans the file and shows you the actual fields present, so you know what you are clearing.",
        ],
      },
      {
        heading: "Where EXIF quietly survives",
        body: [
          "Many people assume uploading a photo strips the data. Sometimes it does — large social platforms often remove EXIF on upload as part of their processing. But the gaps are common and easy to miss. Messaging apps that send a file 'as a document' rather than as a photo keep EXIF intact. Direct file transfers, email attachments, cloud-share links, and many smaller sites pass the original file through untouched.",
          "So the safe assumption is the opposite: unless you stripped it yourself, treat a photo as still carrying its location. The only reliable guarantee is to clear the data before the file leaves your device, rather than trusting each destination to do it for you.",
        ],
      },
      {
        heading: "How to remove EXIF data",
        body: [
          "Clearing EXIF takes a few seconds and does not change how the photo looks.",
          "Step 1: Open the tool at the top of the page and drop in your JPEG or PNG. It scans the file and lists the EXIF fields it finds, including any embedded GPS location, so you can confirm what is actually there.",
          "Step 2: Remove and download the cleaned photo. Every EXIF field is cleared, including the coordinates, and the tool rewrites the file without re-compressing the image — so the picture is pixel-for-pixel the same, just lighter and without the hidden record.",
          "Step 3: Clean before you share, every time. Strip the metadata as the last step before you post or send, especially when the file goes out through a channel that preserves EXIF like a messaging app or a direct download.",
        ],
      },
      {
        heading: "Does removing EXIF hurt the photo?",
        body: [
          "No. EXIF lives in a separate section of the file from the pixel data, so removing it leaves the image itself untouched. There is no recompression, no color shift, and no loss of sharpness — the only change is a slightly smaller file and the absence of the hidden fields. This is the difference between metadata removal and editing: you are clearing a record attached to the photo, not altering the photo.",
        ],
      },
    ],
    faqs: [
      { q: "Does removing EXIF delete the GPS location?", a: "Yes. GPS coordinates are stored inside the EXIF block, so clearing EXIF removes the location from the file entirely. Upload the photo to see whether it currently carries coordinates before you strip it." },
      { q: "Doesn't posting to social media already remove EXIF?", a: "Sometimes, but not reliably. Large platforms often strip it, while messaging apps sending 'as a document', email attachments, and direct file transfers frequently keep it. The only guarantee is to remove it yourself before sharing." },
      { q: "Will the photo lose quality after removing EXIF?", a: "No. EXIF is metadata stored separately from the image pixels. Removing it does not re-compress or alter the picture, so there is zero visible quality change." },
      { q: "Does this work on screenshots and PNGs too?", a: "Yes. The tool handles both JPEG and PNG. Screenshots usually carry little EXIF, but the scanner will show you exactly what any file contains and clear whatever is there." },
    ],
  },
  {
    slug: "gemini-metadata",
    title: "How to Remove Gemini (Imagen) AI Metadata",
    metaTitle: "Remove Gemini AI Metadata & Label",
    metaDescription:
      "Learn how to remove Google Gemini and Imagen metadata and C2PA Content Credentials. An honest guide to what a metadata tool strips and what SynthID leaves behind.",
    keywords: [
      "how to remove Gemini metadata",
      "remove Google Imagen metadata",
      "remove Gemini AI label",
      "strip Gemini Content Credentials",
      "remove SynthID",
      "remove AI metadata from Google image",
    ],
    eyebrow: "Google Gemini / Imagen",
    intro:
      "Removing Gemini metadata means stripping the C2PA Content Credentials and the IPTC and XMP tags that Google writes into images made with Gemini and Imagen. There is a catch worth being upfront about: Google labels its images two different ways, and a metadata tool can only clear one of them. This guide explains what Gemini embeds, how to remove the part that lives in the file's metadata, and why the SynthID watermark is a different problem entirely.",
    sections: [
      {
        heading: "Gemini labels images two different ways",
        body: [
          "This is the single most important thing to understand before you try to clean a Gemini image, because it determines whether removing metadata will actually do what you want. Google tags its AI images with both a metadata layer and a pixel layer, and they are not the same.",
          "The first layer is C2PA Content Credentials, usually accompanied by IPTC and XMP fields. This is a signed manifest written into the file container that declares the image was made with Google AI. It is readable, it is standard, and it is removable — it lives alongside the pixels, not inside them.",
          "The second layer is SynthID, Google's invisible watermark. Instead of writing a note into the file's metadata, SynthID subtly adjusts the pixels themselves in a pattern that Google's detector can recognize later. Because that signal is baked into the image content, it is not metadata, and no metadata remover — including this one — can strip it without altering the picture.",
        ],
      },
      {
        heading: "How platforms use the Gemini label",
        body: [
          "When you upload a Gemini image to a site that reads Content Credentials, it parses the C2PA manifest, validates the signature, and can display an AI-generated badge. That is the metadata path, and it is the one you can control. Removing the manifest removes what those platforms read from the file.",
          "The SynthID path is separate. If a service checks for Google's pixel watermark rather than the C2PA manifest, a clean metadata layer will not change the result, because the signal it is looking for was never in the metadata to begin with. Knowing which path a given platform uses tells you whether metadata removal is enough.",
        ],
      },
      {
        heading: "How to remove Gemini metadata",
        body: [
          "Drag your Gemini or Imagen image into the tool at the top of the page. It works on the file directly and does not re-encode the picture.",
          "Let it scan. The tool detects the C2PA manifest and any IPTC and XMP fields Google added, so you can see the metadata label before you clear it.",
          "Remove and download the cleaned file. The Content Credentials and the metadata AI tag are gone, so platforms that read the file's metadata no longer see a Gemini marker. The pixels, including anything SynthID touched, are left exactly as they were.",
          "Verify in a C2PA inspector if the file matters. Re-check after any further editing, since some apps can write a fresh manifest on export.",
        ],
      },
      {
        heading: "What this cannot remove, stated plainly",
        body: [
          "SynthID lives in the pixels, not the metadata, so it survives metadata removal. If a platform detects AI using SynthID rather than the C2PA manifest, stripping the metadata will not hide it. There is no honest way around this with a metadata tool, because reaching the watermark would mean altering the image itself.",
          "So be clear with yourself about which label you are trying to clear. If it is the Content Credentials manifest and the readable AI tag, this tool removes it cleanly. If it is Google's pixel watermark, no metadata remover can help, and any tool that claims otherwise is either misusing the word metadata or degrading your image to do it.",
        ],
      },
    ],
    faqs: [
      { q: "Can I remove the Gemini AI label?", a: "You can remove the C2PA Content Credentials and the IPTC and XMP metadata label that Gemini writes into the file. You cannot remove the SynthID pixel watermark with a metadata tool, because it lives in the image pixels rather than the metadata." },
      { q: "What is SynthID?", a: "SynthID is Google's invisible watermark, embedded directly into the pixels of images made with Gemini and Imagen. It is separate from the metadata layer and survives metadata removal, since removing metadata does not alter the image content." },
      { q: "Does removing Gemini metadata change the image?", a: "No. The C2PA, IPTC, and XMP data sit in a separate part of the file from the pixels, so removing them leaves the picture bit-for-bit identical. The file gets slightly smaller and nothing about the visible image changes." },
      { q: "Will stripping metadata stop a platform from labeling my Gemini image?", a: "It depends on how that platform detects AI. If it reads the C2PA manifest, removing the metadata removes the trigger. If it checks for the SynthID pixel watermark, metadata removal will not affect the result." },
    ],
  },
  {
    slug: "chatgpt-metadata",
    title: "How to Remove ChatGPT Image Metadata",
    metaTitle: "Remove ChatGPT Image Metadata (Free)",
    metaDescription:
      "Remove ChatGPT and DALL-E image metadata, including C2PA Content Credentials, for free. Strip the AI provenance label from your generated images.",
    keywords: [
      "how to remove ChatGPT image metadata",
      "remove ChatGPT AI label",
      "ChatGPT image C2PA",
      "strip C2PA content credentials",
      "remove AI generated tag from image",
      "ChatGPT image EXIF removal",
      "delete metadata from OpenAI image",
    ],
    eyebrow: "ChatGPT / OpenAI",
    intro:
      "If you want to know how to remove ChatGPT image metadata, the short version is that you need to strip the C2PA Content Credentials and any EXIF or XMP data OpenAI attaches to the file. That signed manifest is what platforms read to slap an AI label on your picture. This guide walks through what ChatGPT actually embeds, why it matters, and how to clear it without altering a single pixel.",
    sections: [
      {
        heading: "What ChatGPT actually embeds in an image",
        body: [
          "When you download a picture generated inside ChatGPT, the pixels are only part of the file. Open one in a metadata viewer and you will find a C2PA manifest tucked in alongside the image data. C2PA stands for the Coalition for Content Provenance and Authenticity, and OpenAI signs this manifest so it can be verified as authentic. In plain terms, it is a cryptographically signed note that says this image was made by an OpenAI model.",
          "That manifest is the important piece, but it is usually not alone. Depending on how the file was produced and passed around, you may also see EXIF fields, an XMP block, and in PNG exports, text chunks. Some of those carry generic software tags or timestamps. The C2PA data is the part that specifically flags the image as AI-generated, and it is the part designed to survive a trip through the internet.",
          "One thing worth being precise about: the manifest sits in the file container, not in the picture itself. So a photo that looks completely ordinary can still be carrying a full provenance record that any compatible reader can pull out in a fraction of a second. You would never see it by looking at the image. A machine sees it instantly.",
        ],
      },
      {
        heading: "How the AI label shows up on social platforms",
        body: [
          "The AI info label you see on Instagram, Facebook, LinkedIn, and similar platforms is not guesswork on their end. They read the C2PA manifest embedded in the file you upload. When their systems find a valid signed manifest marking the image as AI-generated, they attach a label to the post automatically. No human reviews it. No algorithm inspects the pixels. The file told on itself.",
          "This is why two images that look identical can behave differently. One was scrubbed of metadata and posts clean. The other still carries the manifest and gets tagged. The difference is entirely in the bytes the platform reads before it ever renders the picture.",
          "Because the manifest is signed, editing it by hand is not really an option. You cannot just change a value and expect the signature to hold. The practical move is to remove the provenance data entirely, which leaves the platform with nothing to read and nothing to label.",
        ],
      },
      {
        heading: "Why people strip this metadata",
        body: [
          "The most common reason is presentation. A designer using a ChatGPT image as a background, a placeholder, or one layer in a larger composite often does not want that asset broadcasting its origin through an automatic label. The label can distract from the point of the post, and it can misrepresent work that has been heavily edited after generation.",
          "There is also a privacy angle. Metadata blocks can carry timestamps and software identifiers you may not want traveling with a file you send to a client or publish publicly. Clearing them keeps the file lean and keeps incidental details to yourself.",
          "To be direct about the ethics here: removing metadata does not make an AI image not an AI image. It changes what the file discloses, not what the file is. If you are in a context where disclosure is required or expected, stripping the manifest does not relieve you of that. Use this to control incidental data and presentation, not to deceive anyone about the nature of the work.",
        ],
      },
      {
        heading: "How to remove ChatGPT image metadata",
        body: [
          "Save the image from ChatGPT to your device as a PNG or JPEG. Do not screenshot it — a screenshot re-encodes the picture and can degrade quality, and you want the original file so the tool can find every block cleanly.",
          "Open the tool at the top of the page and drop the image onto the upload area. It scans the file and reports the C2PA manifest along with any EXIF, XMP, IPTC, and PNG text chunks it finds, so you can see what is actually in there before you clear it.",
          "Click remove, then download the cleaned file. This clears the C2PA manifest and the other metadata blocks in a single operation, and the image itself is untouched.",
          "Verify the result by re-uploading the cleaned copy, or by checking it in a separate metadata inspector, to confirm the provenance record is gone before you publish or share it.",
        ],
      },
      {
        heading: "What happens to image quality",
        body: [
          "Nothing. Metadata lives in a separate part of the file from the pixel data, so removing it does not touch the picture. The tool rewrites the container without re-compressing the image, which means no new JPEG artifacts, no color shift, and no softening. A 4 megapixel export stays a 4 megapixel export.",
          "This is the practical reason to avoid the screenshot shortcut people reach for. Screenshotting does strip the original metadata, but it re-encodes the visible image and often changes dimensions and color in the process. Stripping the metadata directly gives you a clean file that is pixel-for-pixel the same as what you started with, minus a slightly smaller file size once the extra blocks are gone.",
        ],
      },
      {
        heading: "The limit worth knowing about",
        body: [
          "Metadata removal clears data that sits in the file container. It cannot remove an invisible watermark baked into the pixels themselves. Those are two different things. If a generator embeds a pattern directly into the image data, that pattern is part of the picture, and no metadata tool can reach it without editing the pixels, which would degrade the image.",
          "So think of this as controlling the file container and the disclosure that rides along with it. It reliably removes the C2PA manifest and the EXIF and XMP blocks that platforms and viewers read. It does not, and cannot, promise anything about pixel-level marks. Being clear-eyed about that distinction is the honest way to use any tool in this space, including this one.",
        ],
      },
    ],
    faqs: [
      { q: "Is ChatGPT image metadata the same as DALL-E metadata?", a: "They overlap heavily. ChatGPT image generation uses OpenAI image models, and the output carries C2PA Content Credentials the same way DALL-E exports do, so the removal process is identical. This page focuses on files you download straight out of ChatGPT, but if you generated the image through DALL-E directly, the steps here still apply." },
      { q: "Will removing the C2PA manifest stop Instagram from adding an AI label?", a: "In most cases, yes, because platforms read that signed manifest to apply the label automatically. If the manifest is gone, there is nothing for their system to detect in the file. Keep in mind that platforms can add or change detection methods over time, and this does not affect any invisible pixel-level marks." },
      { q: "Does stripping metadata change how the image looks?", a: "No. Metadata sits in a separate section of the file from the pixels. The tool rewrites the container without re-compressing the image, so there is no quality loss, no color change, and no resizing. The cleaned file matches the original pixel for pixel." },
      { q: "Can this remove an invisible watermark from a ChatGPT image?", a: "No. Invisible watermarks embedded in the pixels are part of the image data itself, and metadata removal only clears data in the file container. This tool reliably removes the C2PA manifest, EXIF, XMP, IPTC, and PNG text chunks, but it cannot touch pixel-level marks." },
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
      "The \"AI info\" or \"Made with AI\" label that Instagram, Facebook, Threads, and LinkedIn attach to images almost always comes from C2PA Content Credentials embedded in the file — not from the platform analyzing your picture. Remove that metadata and, in most cases, there is nothing left for the platform to read. This guide explains exactly where the label comes from, how to strip the trigger, and the one situation where removing metadata will not help.",
    sections: [
      {
        heading: "Where the AI label actually comes from",
        body: [
          "When you upload an image, these platforms do not look at your pixels and guess. They scan the file for a C2PA manifest — a signed Content Credentials record that AI tools embed to declare the image was AI-generated or AI-edited. If they find a valid manifest, they attach the label automatically. No human reviews it, and no algorithm inspects the picture. The file announced itself.",
          "This is why two images that look identical can behave completely differently on upload. One was scrubbed of metadata and posts clean; the other still carries the manifest and gets tagged. The entire difference lives in the bytes the platform reads before it ever renders the image. It also means the label is not really about your image — it is about the provenance record traveling inside it.",
          "The manifest gets there because the generator put it there. DALL-E and ChatGPT, Adobe Firefly and Photoshop's generative features, Google's Gemini and Imagen, and others all write Content Credentials into their output. That is the common thread behind almost every 'Made with AI' tag you will run into.",
        ],
      },
      {
        heading: "How to remove the AI label",
        body: [
          "The fix is to remove the metadata the platform is reading, which takes a few seconds and does not alter the picture.",
          "Step 1: Open the tool at the top of the page and drop in your PNG or JPEG. It scans for C2PA Content Credentials and every other metadata block in the file, so you can see the manifest that is triggering the label.",
          "Step 2: Remove and download the cleaned copy. The tool rewrites the file without the C2PA manifest, along with any EXIF and XMP data, while leaving the pixels untouched. With no Content Credentials left, platforms reading metadata have nothing to label.",
          "Step 3: Post the cleaned file — and post it last. If you edit or re-export the image in another AI-aware app after cleaning it, a fresh manifest can be written back in. Strip the metadata as the final step before you upload, and re-check if anything touches the file afterward.",
        ],
      },
      {
        heading: "When removing metadata is not enough",
        body: [
          "There is one honest limit worth understanding. Some platforms and detectors do not rely only on the C2PA manifest — they also read invisible pixel watermarks such as Google's SynthID, which are baked into the image data itself. Those are not metadata. They live in the pixels, and no metadata tool can remove them without altering the picture, which would degrade it.",
          "So think of metadata removal for what it is: a reliable way to clear the C2PA, EXIF, and XMP layer that drives the label in the large majority of cases. It is not a universal way to make an image undetectable as AI. If a label is coming from a pixel watermark rather than the manifest, stripping metadata will not remove it, and it would be dishonest to promise otherwise.",
        ],
      },
    ],
    faqs: [
      { q: "Why do my images get a 'Made with AI' label?", a: "Because the file carries C2PA Content Credentials that platforms read on upload. The generator embedded a signed manifest declaring the image was made with AI, and the platform simply reads it. Removing that metadata removes the trigger." },
      { q: "Does this always remove the AI label?", a: "It removes labels driven by metadata — C2PA, EXIF, and XMP — which covers most cases. It cannot remove labels based on invisible pixel watermarks such as SynthID, because those live in the image pixels rather than the file's metadata." },
      { q: "Which platforms use these labels?", a: "Instagram, Facebook, Threads, and LinkedIn are the main ones that read C2PA Content Credentials and display an AI label. Support is expanding as more sites adopt the standard." },
      { q: "Will the label come back if I re-edit the image?", a: "It can. Some AI-aware editors write their own Content Credentials on export, so a cleaned file can pick up a new manifest. Strip the metadata as the last step before publishing." },
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
      "Adobe Firefly and Photoshop's generative features attach Content Credentials — a C2PA provenance manifest — to the images they produce or touch. That manifest is what makes a file announce itself as AI-generated or AI-edited when you upload it somewhere. This guide covers what Adobe embeds, why it is there, and how to strip the Firefly metadata cleanly without changing your export.",
    sections: [
      {
        heading: "What Adobe embeds, and why",
        body: [
          "Adobe is a founding member of the C2PA standard and the Content Authenticity Initiative, so provenance is baked into its tools by design rather than bolted on. When you generate an image in Firefly, or use a generative feature like Generative Fill or Generative Expand in Photoshop, Adobe writes a signed Content Credentials manifest into the exported file recording that AI was involved, alongside XMP metadata packets.",
          "The manifest is cryptographically signed, which is the whole point from Adobe's side — it is meant to be tamper-evident and verifiable. It is also what any C2PA-aware platform reads to attach an 'AI-generated' or 'AI-edited' label. For a photographer or designer who used a generative feature for one small cleanup step, that label can misrepresent an image that is overwhelmingly their own work.",
          "One nuance worth knowing: Photoshop can attach Content Credentials even when the AI touch was minor, and the manifest can accumulate a history of edits. So an export you think of as a normal PSD flatten can carry a detailed provenance trail. The reliable way to know what a specific file holds is to scan it, which is the first thing the tool does.",
        ],
      },
      {
        heading: "How to remove Adobe Content Credentials",
        body: [
          "Removing the manifest takes a few seconds and leaves your export pixel-for-pixel identical.",
          "Step 1: Open the tool at the top of the page and drop in your exported PNG or JPEG. It scans the file and reports the C2PA manifest plus Adobe's XMP metadata packets so you can see exactly what is attached.",
          "Step 2: Remove and download the cleaned file. The tool rewrites the image without the Content Credentials manifest and XMP data, and it does not re-compress or resample the picture — so there is no quality loss.",
          "Step 3: Export from Adobe last, then clean. Because Adobe apps re-add credentials on export, the sequence matters: do your Photoshop or Firefly work first, export, then strip the metadata as the final step before you share or publish.",
        ],
      },
      {
        heading: "Being honest about what this changes",
        body: [
          "Removing Content Credentials strips the machine-readable record that AI was involved. It does not change the fact that a generative feature was used, and where disclosure is expected — editorial, journalistic, or contest contexts — you should still disclose. Use metadata removal to stop incidental auto-labeling and to keep an edit history out of a client deliverable, not to misrepresent heavily AI-generated work as something it is not.",
          "It is also worth noting this only clears the metadata layer. Adobe's provenance is metadata-based rather than a pixel watermark, so in Adobe's case removal is thorough — but if a file later passes through a tool that adds a pixel-level watermark, that is a separate signal a metadata tool cannot reach.",
        ],
      },
    ],
    faqs: [
      { q: "Does Photoshop add Content Credentials automatically?", a: "Generative AI features like Generative Fill can attach Content Credentials to an export, and the manifest can record an edit history. This tool detects and removes the resulting C2PA manifest and XMP metadata from the file." },
      { q: "Will removing credentials change my Photoshop export?", a: "No. Only the metadata manifest and XMP packets are removed. The tool does not re-compress or resample the image, so the exported picture looks identical, just with the provenance record gone." },
      { q: "Why does my Firefly image get flagged as AI on social media?", a: "Because Firefly embeds signed Content Credentials, and platforms that support C2PA read that manifest on upload to attach an AI label. Removing the manifest removes the trigger." },
      { q: "Will the credentials come back if I re-export from Adobe?", a: "Yes. Adobe apps re-add Content Credentials on export, so strip the metadata as the last step after you finish editing, not before." },
    ],
  },
  {
    slug: "grok-metadata",
    title: "How to Remove Grok AI Image Metadata",
    metaTitle: "Remove Grok AI Image Metadata (Free)",
    metaDescription:
      "Remove Grok (xAI) generated image metadata and any embedded AI provenance data for free. Strip EXIF, XMP, and C2PA blocks before you share.",
    keywords: [
      "how to remove Grok metadata",
      "remove Grok AI label",
      "strip xAI image metadata",
      "remove Grok Content Credentials",
      "remove AI metadata from Grok image",
      "Grok EXIF removal",
    ],
    eyebrow: "Grok / xAI",
    intro:
      "Removing Grok metadata means scanning the image xAI produced and stripping whatever it carries — EXIF, XMP, and, where provenance standards are applied, a C2PA manifest that flags the file as AI-generated. Grok images move fast on X, and the metadata rides along quietly until you clear it. This guide is honest about the fact that what Grok embeds shifts as the product evolves, so the reliable move is to scan first and remove what is actually there rather than assume.",
    sections: [
      {
        heading: "What a Grok image can carry",
        body: [
          "Grok's image generation comes out of xAI, and like every other tool in this space it writes more than pixels into the file. Exactly what lands there depends on the model version and how you exported the image, which is why guessing is a bad idea. A file saved directly from the app behaves differently from a screenshot or a re-shared copy that has already passed through another service.",
          "In practice you can expect standard EXIF and XMP fields, and increasingly a C2PA manifest, because the whole industry is converging on Content Credentials as the provenance standard. That manifest, when present, is a signed record declaring the image AI-generated, and it is the piece platforms read to attach an AI label.",
          "The one dependable thing to say is this: the only way to know what a specific Grok file contains is to open it and look. The tool does exactly that before it removes anything, so you are never working blind.",
        ],
      },
      {
        heading: "Why people strip Grok metadata",
        body: [
          "The same reasons that apply to any AI image apply here. If you are using a Grok render in a design, a thumbnail, or a composite, you usually do not want it announcing its origin through an automatic label, and you may not want timestamps or tool identifiers traveling with a file you publish.",
          "Because Grok output is often posted straight to social platforms, the AI label question is especially live. If a platform reads a C2PA manifest and tags the post, clearing that manifest before you upload removes the trigger. Just be honest with yourself about what you are doing and why — removing metadata changes what the file discloses, not the fact that it was AI-generated.",
        ],
      },
      {
        heading: "How to remove Grok metadata",
        body: [
          "Save the Grok image to your device as a PNG or JPEG rather than screenshotting it, so the tool can read every block in the original file.",
          "Drop the image into the tool at the top of the page. It lists every EXIF, XMP, and C2PA block it detects, so you can see exactly what is embedded before clearing it.",
          "Click remove and download the clean copy. All detected metadata is stripped while the image pixels stay identical to the original.",
          "Re-check the cleaned file in a metadata viewer if it is going somewhere that matters, especially if another app touched it after generation.",
        ],
      },
      {
        heading: "The honest limit",
        body: [
          "Metadata removal clears the C2PA, EXIF, and XMP data in the file container. It cannot remove a watermark baked into the pixels themselves, because that would mean altering the image. If xAI or a downstream platform ever relies on a pixel-level signal rather than metadata, a clean file will not defeat it. This tool controls the metadata layer reliably and makes no claim beyond that.",
        ],
      },
    ],
    faqs: [
      { q: "Do Grok images carry an AI label?", a: "Where provenance metadata such as a C2PA manifest is present, this tool detects and removes it, which clears the metadata-based AI label. What Grok embeds changes across versions, so upload your image to see exactly what is in it rather than assuming." },
      { q: "Does removing metadata affect the image?", a: "No. Only the metadata is removed. The tool rewrites the file container without re-compressing the picture, so the pixels are unchanged and there is no quality loss." },
      { q: "Should I screenshot a Grok image instead?", a: "No. A screenshot re-encodes the picture and can lose quality or change dimensions. Save the original file and strip its metadata directly to keep the image pixel-for-pixel identical." },
    ],
  },
  {
    slug: "nano-banana-metadata",
    title: "How to Remove Nano Banana (Gemini) Metadata",
    metaTitle: "Remove Nano Banana AI Metadata & Label",
    metaDescription:
      "Remove Nano Banana (Gemini 2.5 Flash Image) metadata and C2PA Content Credentials for free. Learn what the tool strips and what the SynthID watermark leaves behind.",
    keywords: [
      "how to remove Nano Banana metadata",
      "remove Nano Banana AI label",
      "Gemini 2.5 Flash Image metadata",
      "strip Nano Banana C2PA",
      "remove SynthID Nano Banana",
      "remove AI metadata from Nano Banana",
    ],
    eyebrow: "Nano Banana / Gemini 2.5 Flash Image",
    intro:
      "Nano Banana is the nickname for Google's Gemini 2.5 Flash Image model, and it went everywhere because it is fast and unusually good at edits. Removing Nano Banana metadata means stripping the C2PA Content Credentials and the IPTC/XMP fields Google writes into the file — the readable, removable layer. This guide walks through that, and is straight with you about SynthID, the one part a metadata tool cannot touch.",
    sections: [
      {
        heading: "What Nano Banana embeds in an image",
        body: [
          "Because Nano Banana is a Gemini model, it labels images the same way the rest of Google's image stack does, which means two separate layers. The first is metadata: a C2PA Content Credentials manifest plus IPTC and XMP fields written into the file. This is a signed, machine-readable record that marks the image as AI-generated, and it is exactly the kind of data a metadata tool can remove.",
          "The second layer is SynthID, Google's invisible watermark. SynthID is not metadata. It is a pattern encoded directly into the pixels of the image, designed to survive resizing, cropping, and compression. That design goal is the whole point, and it is also why no metadata remover — this one included — can strip it without altering the picture itself.",
          "So a Nano Banana image is carrying both a removable label in the file container and an embedded signal in the pixels. Keeping those two straight is the single most important thing to understand before you try to clear anything.",
        ],
      },
      {
        heading: "How the AI label gets applied",
        body: [
          "When you upload a Nano Banana image to a platform that reads Content Credentials, it parses the C2PA manifest, validates the signature against a known issuer, and attaches an AI label automatically. That is the metadata path, and it is the one removal actually affects. Clear the manifest and the platform has nothing in the file's metadata to read.",
          "The SynthID path is different. A service that specifically checks for Google's pixel watermark can still detect it even on a file whose metadata you have stripped clean. Whether a given platform uses one path, the other, or both is not always public, so the honest framing is that removing metadata removes the metadata-based label and nothing more.",
        ],
      },
      {
        heading: "How to remove Nano Banana metadata",
        body: [
          "Save the image out of the Gemini app as a PNG or JPEG rather than screenshotting it, so the original metadata blocks are intact for the scan.",
          "Drop the file into the tool at the top of the page. It detects the C2PA manifest and any IPTC or XMP fields the model added, and shows you what is there before you remove it.",
          "Click remove and download the cleaned file. The Content Credentials and the metadata AI label are stripped, so any platform reading the file's metadata no longer sees a Gemini tag. The pixels are untouched.",
          "If clearing the AI label is your goal, verify honestly: strip the metadata, then remember that SynthID in the pixels is unaffected. If a platform is reading SynthID rather than C2PA, the label can still appear.",
        ],
      },
      {
        heading: "What this cannot do",
        body: [
          "This is the part worth reading twice. Metadata removal takes out the C2PA, IPTC, and XMP data — the readable label. It does not and cannot remove SynthID, because SynthID lives in the pixels and removing it would mean changing the image. Any tool that promises to erase every trace that a Nano Banana image was AI-generated is overselling. Be clear with yourself about which label you are actually trying to clear, and use metadata removal for the metadata layer, which is exactly what it is good at.",
        ],
      },
    ],
    faqs: [
      { q: "What is Nano Banana?", a: "Nano Banana is the popular nickname for Google's Gemini 2.5 Flash Image model, known for fast, high-quality image generation and editing. Its output is labeled the same way other Gemini images are, with C2PA Content Credentials in the metadata and a SynthID watermark in the pixels." },
      { q: "Can I remove the Nano Banana AI label?", a: "You can remove the C2PA and IPTC/XMP metadata label the model writes into the file, which clears the label on any platform reading the file's metadata. You cannot remove the SynthID pixel watermark with a metadata tool." },
      { q: "What is SynthID and why can't it be removed?", a: "SynthID is Google's invisible watermark encoded into the image pixels rather than the metadata. It is built to survive edits and compression, so a metadata tool cannot strip it without altering the picture itself." },
      { q: "Does removing metadata change the image quality?", a: "No. The C2PA, IPTC, and XMP data sit in a separate part of the file from the pixels. Removing them rewrites the container without re-compressing the image, so there is no quality loss." },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

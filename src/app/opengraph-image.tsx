import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "NoAIMetadata — Remove AI Metadata & C2PA from Images";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(163,230,53,0.20), transparent 45%), radial-gradient(circle at 85% 75%, rgba(16,185,129,0.15), transparent 45%)",
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#a3e635",
            marginBottom: 24,
          }}
        >
          Secure &amp; Private
        </div>
        <div
          style={{
            fontSize: 118,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            display: "flex",
          }}
        >
          Strip AI Metadata.
        </div>
        <div
          style={{
            fontSize: 34,
            color: "rgba(255,255,255,0.55)",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Remove C2PA signatures, EXIF, XMP, and hidden generation parameters
          from PNG &amp; JPEG images. Free.
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: "#ffffff",
            marginTop: 56,
            letterSpacing: "-0.02em",
          }}
        >
          NOAI<span style={{ color: "#a3e635" }}>METADATA</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

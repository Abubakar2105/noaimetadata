"""Service layer — single analyze() call, no redundant work."""

from pathlib import Path
from typing import Any

# Import directly from the modules in the api/ directory
from extractor import (
    extract_ai_metadata,
    has_ai_metadata,
    get_ai_metadata_summary,
)
from utils import is_supported_format
from cleaner import remove_ai_metadata


# Known tool patterns to extract from field values
_TOOL_PATTERNS = [
    "stable diffusion",
    "comfyui",
    "automatic1111",
    "dall-e",
    "dall·e",
    "midjourney",
    "firefly",
    "imagen",
    "chatgpt",
    "gpt-4o",
    "sora",
    "openai",
    "adobe",
    "microsoft designer",
    "truepic",
]


class MetadataService:

    @staticmethod
    def is_supported(path: Path) -> bool:
        return is_supported_format(path)

    @staticmethod
    def remove_ai_metadata(source: Path, output: Path, keep_standard: bool) -> Path:
        return remove_ai_metadata(source, output, keep_standard)

    @staticmethod
    def analyze(path: Path) -> dict[str, Any]:
        """
        Single-pass analysis.
        """
        raw = extract_ai_metadata(path)
        summary = get_ai_metadata_summary(path)

        sources: list[str] = []
        tools: list[str] = []
        fields: dict[str, str] = {}

        if not raw:
            return {
                "has_ai": False,
                "sources": [],
                "tools": [],
                "fields": {},
                "summary": "No AI metadata found.",
            }

        # Detect sources
        if "c2pa" in raw:
            sources.append("C2PA")
            c2pa = raw["c2pa"]
            if isinstance(c2pa, dict):
                if c2pa.get("issuer"):
                    sources.append(f"C2PA: {c2pa['issuer']}")
                if c2pa.get("ai_tool"):
                    tools.append(c2pa["ai_tool"])

        # Process fields
        for key, value in raw.items():
            if key in ("c2pa", "c2pa_chunk"):
                continue

            if isinstance(value, bytes):
                display = f"<{len(value)} bytes>"
            elif isinstance(value, dict):
                display = _flatten(value)
            elif isinstance(value, (list, tuple)):
                display = ", ".join(str(v) for v in value)
            else:
                display = str(value)

            fields[key] = display

            if not sources or sources[0].startswith("C2PA"):
                if "PNG" not in " ".join(sources):
                    sources.insert(0, "PNG text chunks")

            display_lower = display.lower()
            for pattern in _TOOL_PATTERNS:
                if pattern in display_lower and pattern.title() not in tools:
                    name = pattern.replace("·", "-").title()
                    if name not in tools:
                        tools.append(name)

        # Deduplicate tools
        seen = set()
        unique_tools = []
        for t in tools:
            if t.lower() not in seen:
                seen.add(t.lower())
                unique_tools.append(t)

        return {
            "has_ai": True,
            "sources": sources,
            "tools": unique_tools,
            "fields": fields,
            "summary": summary,
        }


def _flatten(d: dict, prefix: str = "") -> str:
    """Flatten nested dict to readable string."""
    parts = []
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            parts.append(_flatten(v, key))
        elif isinstance(v, (list, tuple)):
            parts.append(f"{key}: {', '.join(str(i) for i in v)}")
        else:
            parts.append(f"{key}: {v}")
    return " | ".join(parts)
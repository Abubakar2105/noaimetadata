"""Schemas tailored for the analyze → remove UI flow."""

from pydantic import BaseModel
from typing import Any


class MessageResponse(BaseModel):
    message: str


class AnalyzeResponse(BaseModel):
    """Full analysis result — designed for frontend rendering."""

    filename: str
    has_ai: bool
    sources: list[str]              # ["PNG text chunks", "C2PA"]
    tools: list[str]                # ["Stable Diffusion", "DALL-E 3"]
    fields: dict[str, str]          # {"parameters": "...", "model": "..."}
    summary: str                    # Human-readable fallback
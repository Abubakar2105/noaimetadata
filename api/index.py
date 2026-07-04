"""FastAPI — two endpoints: analyze then remove."""

import sys
from pathlib import Path

# Add the 'api' directory to Python path
api_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(api_dir))

# ─── TRICK: Map 'noailabel.api' to this folder ────────────────────────────────
# Your original files import like: from noailabel.api.c2pa import ...
# This aliases that path to the current api/ folder so we don't have to 
# edit your original source code.
import types
_noailabel = types.ModuleType("noailabel")
_noailabel_api = types.ModuleType("noailabel.api")
_noailabel_api.__path__ = [str(api_dir)]
sys.modules["noailabel"] = _noailabel
sys.modules["noailabel.api"] = _noailabel_api
# ──────────────────────────────────────────────────────────────────────────────

from tempfile import NamedTemporaryFile
from shutil import copyfileobj

from fastapi import FastAPI, UploadFile, File, HTTPException, Query
from fastapi.responses import Response

from core.config import settings
from models.schemas import AnalyzeResponse, MessageResponse
from services.metadata import MetadataService

app = FastAPI(
    title="noai-watermark API",
    version="0.1.0",
    docs_url="/api/docs" if settings.ENVIRONMENT == "development" else None,
)

svc = MetadataService()


@app.get("/api/health", response_model=MessageResponse)
async def health():
    return MessageResponse(message="ok")


@app.post("/api/analyze", response_model=AnalyzeResponse)
async def analyze(file: UploadFile = File(...)):
    path = await _save_tmp(file)

    if not svc.is_supported(path):
        raise HTTPException(400, f"Unsupported format: {file.filename}")

    try:
        result = svc.analyze(path)
    except Exception as e:
        raise HTTPException(422, f"Analysis failed: {e}")

    result["filename"] = file.filename
    return AnalyzeResponse(**result)


@app.post("/api/remove")
async def remove(
    file: UploadFile = File(...),
    keep_standard: bool = Query(True, description="Keep Author/Title/Copyright"),
):
    path = await _save_tmp(file)

    if not svc.is_supported(path):
        raise HTTPException(400, f"Unsupported format: {file.filename}")

    out = path.with_name(f"clean{path.suffix}")

    try:
        svc.remove_ai_metadata(path, out, keep_standard)
    except Exception as e:
        raise HTTPException(422, f"Removal failed: {e}")

    return _download(out, f"cleaned_{file.filename}")


# ─── Helpers ───────────────────────────────────────────────────────────────────

async def _save_tmp(file: UploadFile) -> Path:
    suffix = Path(file.filename).suffix if file.filename else ".png"
    tmp = NamedTemporaryFile(delete=False, suffix=suffix)
    copyfileobj(file.file, tmp)
    tmp.close()
    return Path(tmp.name)


def _download(path: Path, filename: str) -> Response:
    ct = "image/png" if path.suffix.lower() == ".png" else "image/jpeg"
    return Response(
        content=path.read_bytes(),
        media_type=ct,
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


handler = app
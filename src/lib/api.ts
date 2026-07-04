const BASE = '/api';

async function upload(file: File, endpoint: string, query = '') {
  const form = new FormData();
  form.append('file', file);
  const res = await fetch(`${BASE}${endpoint}${query}`, { method: 'POST', body: form });
  if (!res.ok) {
    const { detail } = await res.json().catch(() => ({ detail: 'Request failed' }));
    throw new Error(detail);
  }
  return res;
}

export interface AnalyzeResult {
  filename: string;
  has_ai: boolean;
  sources: string[];
  tools: string[];
  fields: Record<string, string>;
  summary: string;
}

export async function analyzeImage(file: File): Promise<AnalyzeResult> {
  return upload(file, '/analyze').then(r => r.json());
}

export async function removeMetadata(
  file: File,
  keepStandard = true
): Promise<string> {
  const res = await upload(file, `/remove?keep_standard=${keepStandard}`);
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
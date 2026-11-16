const memory = new Map();
export async function get(path, fresh = false) {
  let saved = memory.get(path);
  if (!saved) { try { saved = JSON.parse(sessionStorage.getItem(path)); } catch {} }
  if (!fresh && saved && Date.now() - saved.time < 60000) return saved.data;
  const headers = saved?.tag ? { 'If-None-Match': saved.tag } : {};
  const response = await fetch('https://make.fun/api/' + path, { headers, signal: AbortSignal.timeout(30000) });
  if (!response.ok && response.status !== 304) throw new Error('Live API returned ' + response.status);
  const entry = { data: response.status === 304 ? saved.data : await response.json(), tag: response.headers.get('ETag') || saved?.tag, time: Date.now() };
  memory.set(path, entry);
  try { sessionStorage.setItem(path, JSON.stringify(entry)); } catch {}
  return entry.data;
}

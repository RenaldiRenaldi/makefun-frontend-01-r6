export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const money = value => '$' + Number(value || 0).toLocaleString('en-US', { maximumFractionDigits: 2 });
export const num = value => Number(value || 0).toLocaleString('en-US');
export const pot = c => Number(c.potUsd ?? c.rewardAmount ?? 0);
export const link = slug => '#/bounty/' + encodeURIComponent(slug);
export const date = value => value ? new Date(value).toLocaleString('en-GB', { timeZone: 'UTC', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) + ' UTC' : 'Not announced';
export function clock(c) {
  const hours = (Date.parse(c.deadline) - Date.now()) / 3600000;
  if (!Number.isFinite(hours)) return '<span class="chip">Deadline pending</span>';
  if (hours <= 0) return '<span class="chip">Ended</span>';
  const text = hours >= 24 ? Math.floor(hours / 24) + 'd ' + Math.floor(hours % 24) + 'h left' : 'ends in ' + Math.max(1, Math.ceil(hours)) + 'h';
  return `<span class="chip ${hours < 6 ? 'urgent' : 'green'}">${text}</span>`;
}
export const fee = c => Number(c.entryFeeUsd) ? `<span class="chip fee">${money(c.entryFeeUsd)} fee</span>` : '<span class="chip green">Free</span>';
export function paragraphs(text) { return String(text || '').split(/\n\n+/).map(p => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join(''); }

export function monthsBetween(start: string, end: string | null): number {
  const a = new Date(start);
  const b = end ? new Date(end) : new Date();
  let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  if (b.getDate() >= a.getDate()) months += 1;
  return Math.max(months, 1);
}

export function formatDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ');
}

export function formatMonth(date: string): string {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatDay(date: string): string {
  return new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

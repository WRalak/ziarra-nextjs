// lib/format.ts

/** Format KES amount with locale-aware thousands separator */
export function formatKes(amount: number): string {
  return `KES ${Math.round(amount).toLocaleString("en-KE")}`;
}

/** Format a number with commas */
export function formatNumber(n: number): string {
  return n.toLocaleString("en-KE");
}

/** Format percentage to 1 decimal place */
export function formatPct(pct: number): string {
  return `${pct.toFixed(1)}%`;
}

/** Format ISO date string to readable form */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Format relative time e.g. "2 days ago" */
export function formatRelative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return formatDate(iso);
}

/** Generate a Ziarra booking reference e.g. ZIA-4821 */
export function generateRef(): string {
  return `ZIA-${Math.floor(1000 + Math.random() * 9000)}`;
}

/** Build full referral URL for a creator + optional package */
export function buildRefUrl(
  handle: string,
  packageSlug?: string
): string {
  const path = packageSlug ? `/packages/${packageSlug}` : "/";
  return `${path}?ref=${handle}`;
}

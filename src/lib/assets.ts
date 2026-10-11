/** Base path for the site. Use env override when running locally or in a custom deploy target. */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/LePeanutButter" : "");

/** Resolve a public-folder asset path with the Next.js basePath prefix. */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return BASE_PATH ? `${BASE_PATH}${normalized}` : normalized;
}

/** Shorthand for media assets under /media/… */
export function mediaUrl(...segments: string[]): string {
  return assetUrl(`/media/${segments.join("/")}`);
}

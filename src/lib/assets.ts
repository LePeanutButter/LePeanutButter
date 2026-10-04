/** Base path for static export (must match next.config.ts). */
export const BASE_PATH = "/portfolio-website";

/** Resolve a public-folder asset path with the Next.js basePath prefix. */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

/** Shorthand for media assets under /media/… */
export function mediaUrl(...segments: string[]): string {
  return assetUrl(`/media/${segments.join("/")}`);
}

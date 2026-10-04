/** Extract GitHub username from a profile URL. */
export function githubUsername(url: string): string | null {
  const match = url.match(/github\.com\/([^/?#]+)/i);
  return match?.[1] ?? null;
}

/** Standard GitHub avatar URL for a profile link. */
export function githubAvatarFromUrl(url: string): string | undefined {
  const user = githubUsername(url);
  return user ? `https://github.com/${user}.png` : undefined;
}

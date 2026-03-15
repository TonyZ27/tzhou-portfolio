/**
 * Utility function to generate asset URLs with proper base path handling.
 * For GitHub Pages deployment with subpath (e.g., /tzhou-portfolio).
 *
 * @param path - The asset path (e.g., 'images/hero.png' or '/images/hero.png')
 * @returns The complete URL with base path (e.g., '/tzhou-portfolio/images/hero.png')
 */
export function getAssetUrl(path: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Remove trailing slash from base, remove leading slash from path
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${cleanBase}/${cleanPath}`;
}

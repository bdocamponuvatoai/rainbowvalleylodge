import "server-only";

// Deployment settings, read at build time.

function resolveSiteUrl(): string {
  const explicit = process.env.SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const url = explicit || (vercel ? `https://${vercel}` : "http://localhost:3000");
  return url.replace(/\/+$/, "");
}

export const siteUrl = resolveSiteUrl();

/** Search engines may index the site only when SITE_INDEXABLE=true. */
export const isIndexable = process.env.SITE_INDEXABLE === "true";

if (isIndexable && new URL(siteUrl).hostname === "localhost") {
  throw new Error("SITE_INDEXABLE=true requires SITE_URL to be set to the public domain.");
}

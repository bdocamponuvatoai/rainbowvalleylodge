import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/deployment";
import { stays } from "@/content/stays";

export const dynamic = "force-static";

const pages = ["/", "/stay/", "/fishing/", "/explore/", "/about/", "/gallery/", "/plan/", "/contact/", "/privacy/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...pages, ...stays.map((s) => `/stay/${s.slug}/`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}

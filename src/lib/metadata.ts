import type { Metadata } from "next";

import { site } from "@/config/site";
import { photos } from "@/content/photos";

type PageMetadataInput = { title: string; path: string; description: string };

/** Per-page title, description, canonical URL and Open Graph tags. */
export function pageMetadata({ title, path, description }: PageMetadataInput): Metadata {
  const image = photos.lodge.full;
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: image.src, width: image.width, height: image.height }],
    },
  };
}

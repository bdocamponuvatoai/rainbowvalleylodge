import { getImageProps } from "next/image";

import type { Photo as PhotoSource } from "@/content/photos";

const SIZES = "(max-width: 700px) 100vw, 100vw";

type PhotoProps = {
  photo: PhotoSource;
  alt: string;
  className?: string;
  /** Above-the-fold / LCP image: load eagerly with high priority. */
  eager?: boolean;
};

/**
 * next/image can't emit a srcset for a static export with unoptimized images,
 * so the props come from getImageProps and the srcset lists the pre-sized
 * 720px variant alongside the original.
 */
export function Photo({ photo, alt, className, eager = false }: PhotoProps) {
  const { full, small } = photo;
  const { props } = getImageProps({
    src: full,
    alt,
    sizes: SIZES,
    loading: eager ? "eager" : "lazy",
    fetchPriority: eager ? "high" : undefined,
  });
  const srcSet = small ? `${small.src} ${small.width}w, ${full.src} ${full.width}w` : `${full.src} ${full.width}w`;
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- alt is in props
  return <img {...props} style={undefined} className={className} srcSet={srcSet} sizes={SIZES} />;
}

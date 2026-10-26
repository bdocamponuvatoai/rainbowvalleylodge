import Link from "next/link";

import { Photo } from "@/components/ui/Photo";
import { photos } from "@/content/photos";
import type { Stay } from "@/content/stays";

export function StayCard({ stay, hidden }: { stay: Stay; hidden?: boolean }) {
  const href = `/stay/${stay.slug}/`;
  return (
    <article className="stay-card" hidden={hidden}>
      <Link className="image-link" href={href}>
        <Photo photo={photos[stay.photo]} alt={stay.name} />
        <span className="image-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="card-copy">
        <span className="eyebrow">{stay.label}</span>
        <h3>
          <Link href={href}>{stay.name}</Link>
        </h3>
        <p>{stay.description}</p>
        <div className="card-tags">
          {stay.tags.slice(0, 2).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";

import { Closing } from "@/components/sections/Closing";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/config/site";
import { photos } from "@/content/photos";
import { getStay, stays } from "@/content/stays";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stay/[slug]">) {
  const stay = getStay((await params).slug);
  if (!stay) return {};
  return pageMetadata({ title: stay.name, path: `/stay/${stay.slug}/`, description: stay.description });
}

export default async function StayDetailPage({ params }: PageProps<"/stay/[slug]">) {
  const stay = getStay((await params).slug);
  if (!stay) notFound();

  return (
    <>
      <section className="container detail-head">
        <Link className="back-link" href="/stay/">
          ← All stays
        </Link>
        <span className="eyebrow">{stay.label}</span>
        <h1>{stay.name}</h1>
        <p>{stay.description}</p>
      </section>
      <div className="detail-photo container">
        <Photo photo={photos[stay.photo]} alt={stay.name} eager />
      </div>
      <section className="section container detail-content">
        <div>
          <span className="eyebrow">ROOM TO MAKE MEMORIES</span>
          <h2>
            Your Montana
            <br />
            home base.
          </h2>
          <p className="lead">{stay.body}</p>
          <ul className="feature-list">
            {stay.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <aside className="reservation-card">
          <span className="eyebrow">MAKE IT YOURS</span>
          <h3>See what’s available.</h3>
          <p>Choose your dates in the lodge’s secure booking system for current rates and the complete room details.</p>
          <ArrowLink href={site.bookingUrl} label="Check availability" className="button" external />
          <span className="small-note">Opens the lodge’s Checkfront reservations.</span>
          <hr />
          <p>Want a hand choosing?</p>
          <a className="phone-link" href={site.phone.href}>
            {site.phone.label}
          </a>
          <ArrowLink href={stay.officialUrl} label="Original accommodation details" external />
        </aside>
      </section>
      <section className="container section compact">
        <div className="section-head">
          <div>
            <span className="eyebrow">TAKE A CLOSER LOOK</span>
            <h2>Picture yourself here.</h2>
          </div>
          <span className="small-note">Tap a photo to explore</span>
        </div>
        <PhotoGallery
          className="room-gallery"
          items={stay.gallery.map((g) => ({ photo: photos[g.photo], caption: g.caption }))}
        />
      </section>
      <Closing />
    </>
  );
}

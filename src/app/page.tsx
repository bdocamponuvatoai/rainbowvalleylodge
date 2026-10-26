import Link from "next/link";

import { BookingStrip } from "@/components/home/BookingStrip";
import { Closing } from "@/components/sections/Closing";
import { FaqList } from "@/components/sections/FaqList";
import { LodgingJsonLd } from "@/components/seo/LodgingJsonLd";
import { StayCard } from "@/components/stay/StayCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { siteUrl } from "@/config/deployment";
import { adventures } from "@/content/explore";
import { faq } from "@/content/faq";
import { photos } from "@/content/photos";
import { stays } from "@/content/stays";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Montana, at your own pace",
  path: "/",
  description:
    "Discover Rainbow Valley Lodge in Ennis, Montana. Explore comfortable stays, Madison River fly fishing, and adventures across Southwest Montana.",
});

const amenities = [
  ["☼", "Continental breakfast"],
  ["≋", "Seasonal heated pool"],
  ["⌁", "On-site fly shop"],
  ["⌂", "Rooms, suites & cabins"],
];

export default function HomePage() {
  return (
    <>
      <LodgingJsonLd siteUrl={siteUrl} />
      <section className="hero">
        <Photo
          photo={photos.lodge}
          alt="Flower-lined porch at Rainbow Valley Lodge in Ennis, Montana"
          className="hero-image"
          eager
        />
        <div className="hero-shade"></div>
        <div className="hero-copy">
          <span className="eyebrow">ENNIS, MONTANA · MADISON RIVER VALLEY</span>
          <h1>
            A little closer
            <br />
            {"to the "}
            <em>wild.</em>
          </h1>
          <p>Quiet mornings. Open horizons. A warm place to come home to.</p>
          <ArrowLink href="/stay/" label="Explore our stays" className="button light" />
        </div>
        <div className="hero-foot">
          <span>
            ROOMS, SUITES &amp; CABINS
            <br />
            WITH A MONTANA STATE OF MIND
          </span>
          <a href="#welcome">Take a look around ↓</a>
        </div>
      </section>
      <BookingStrip />

      <section id="welcome" className="container section welcome">
        <div>
          <span className="eyebrow">WELCOME TO RAINBOW VALLEY</span>
          <h2>
            Wide-open country.
            <br />A warm welcome.
          </h2>
        </div>
        <div>
          <p className="lead">
            Some places make it easy
            <br />
            to feel a little more yourself.
          </p>
          <p>
            On the edge of Ennis, the Madison Valley opens up around you. Settle into a cozy room or find a cabin of
            your own. Then follow the day wherever it takes you.
          </p>
          <ArrowLink href="/about/" label="Meet the lodge" />
        </div>
      </section>
      <div className="container amenity-row">
        {amenities.map(([icon, label]) => (
          <span key={label}>
            {`${icon} `}
            <b>{label}</b>
          </span>
        ))}
      </div>

      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">A PLACE TO CALL YOUR OWN</span>
            <h2>Stay a little longer.</h2>
          </div>
          <ArrowLink href="/stay/" label="Explore all stays" />
        </div>
        <div className="stay-grid home-stays">
          {stays.slice(0, 3).map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>

      <section className="fishing-feature">
        <div className="fishing-photo">
          <Photo photo={photos.creek} alt="An angler fishing O’Dell Spring Creek" />
          <span className="photo-label">O’DELL SPRING CREEK, MONTANA</span>
        </div>
        <div className="fishing-copy">
          <span className="eyebrow">LIFE LOOKS DIFFERENT FROM THE RIVER</span>
          <h2>
            One more cast.
            <br />
            One more story.
          </h2>
          <p>
            Let the Madison set the pace. Find local advice at O’Dell Creek Fly Shop, join a guided trip with River
            Borne Outfitters, or ask about a day on O’Dell Spring Creek.
          </p>
          <ArrowLink href="/fishing/" label="Find your water" className="button light" />
          <div className="fine-row">
            <span>MADISON RIVER</span>
            <span>GUIDED FISHING</span>
            <span>FLY SHOP</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">BEYOND YOUR FRONT PORCH</span>
            <h2>
              There’s a whole
              <br />
              valley out there.
            </h2>
          </div>
          <div>
            <p>Go a little further. Take the scenic way back.</p>
            <ArrowLink href="/explore/" label="Explore around Ennis" />
          </div>
        </div>
        <div className="adventure-grid">
          {adventures.map((a) => (
            <Link key={a.id} className="adventure-card" href={`/explore/#${a.id}`}>
              <Photo photo={a.photo} alt={a.alt} />
              <div>
                <span className="eyebrow">{a.kicker}</span>
                <h3>{a.title}</h3>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="host-section container">
        <div className="host-picture">
          <Photo photo={photos.hosts} alt="Ed and Jeanne Williams, hosts at Rainbow Valley Lodge" />
          <span>ED &amp; JEANNE WILLIAMS · YOUR HOSTS</span>
        </div>
        <div>
          <span className="eyebrow">THE PEOPLE BEHIND THE PORCH LIGHT</span>
          <h2>
            Come as a guest.
            <br />
            Leave with a story.
          </h2>
          <p>
            A good stay starts with a warm welcome. Ed and Jeanne Williams welcome you to their corner of Montana—with a
            comfortable place to land and a little local knowledge for the road ahead.
          </p>
          <ArrowLink href="/about/" label="Our story" />
        </div>
      </section>

      <section className="section container faq-section">
        <div>
          <span className="eyebrow">BEFORE YOU PACK</span>
          <h2>
            A few things
            <br />
            worth knowing.
          </h2>
          <ArrowLink href="/plan/" label="Plan your visit" />
        </div>
        <FaqList items={faq.slice(0, 4)} />
      </section>
      <Closing />
    </>
  );
}

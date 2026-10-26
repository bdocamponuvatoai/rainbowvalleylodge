import { Itinerary } from "@/components/explore/Itinerary";
import { Closing } from "@/components/sections/Closing";
import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { destinations } from "@/content/explore";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Explore Ennis & Southwest Montana",
  path: "/explore/",
  description:
    "A considered guide to days around Ennis, the Madison Valley, Virginia City and Yellowstone National Park.",
});

export default function ExplorePage() {
  return (
    <>
      <PageIntro
        kicker="YOUR SOUTHWEST MONTANA FIELD GUIDE"
        title={["Out here,", "take your time."]}
        copy="Follow the river. Wander a historic main street. Find a horizon worth stopping for. Ennis is a place to begin."
        photo={photos.quakeLake}
      />
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">MAKE THE DAY YOURS</span>
            <h2>
              A different kind
              <br />
              of day trip.
            </h2>
          </div>
          <p>
            Start with a direction.
            <br />
            Leave a little room for discovery.
          </p>
        </div>
        <div className="editorial-list">
          {destinations.map((d) => (
            <article key={d.id} id={d.id}>
              <Photo photo={d.photo} alt={d.title} />
              <div>
                <span className="eyebrow">{d.kicker}</span>
                <h2>{d.title}</h2>
                <p>{d.copy}</p>
                <ArrowLink href={d.url} label="Plan this outing" external />
              </div>
            </article>
          ))}
        </div>
      </section>
      <Itinerary />
      <Closing />
    </>
  );
}

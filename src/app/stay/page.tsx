import { Closing } from "@/components/sections/Closing";
import { FaqList } from "@/components/sections/FaqList";
import { PageIntro } from "@/components/sections/PageIntro";
import { StayFilter } from "@/components/stay/StayFilter";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { faq } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Rooms, suites & private cabins",
  path: "/stay/",
  description: "Find your place in the Madison Valley. Browse lodge rooms, kitchen suites, and off-property cabins.",
});

export default function StayPage() {
  return (
    <>
      <PageIntro
        kicker="YOUR PLACE IN THE VALLEY"
        title={["Settle in.", "Spread out. Stay awhile."]}
        copy="A cozy room for two. A suite with room to unwind. A cabin that feels like your own corner of Montana."
      />
      <section className="container section compact">
        <StayFilter />
        <aside className="note-panel">
          <div>
            <h3>More cabins. More possibilities.</h3>
            <p>
              These are featured options. Browse the lodge’s complete cabin collection for additional layouts and
              locations.
            </p>
          </div>
          <ArrowLink
            href="https://rainbowvalleylodge.com/accommodations/cabins/"
            label="See the full collection"
            external
          />
        </aside>
      </section>
      <section className="container section faq-section">
        <div>
          <span className="eyebrow">FIND YOUR FIT</span>
          <h2>
            Make yourself
            <br />
            at home.
          </h2>
          <p>Cabins are off-property, and amenities vary by accommodation. The lodge can help you choose.</p>
        </div>
        <FaqList items={faq.slice(1)} />
      </section>
      <Closing />
    </>
  );
}

import { Closing } from "@/components/sections/Closing";
import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/config/site";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Madison River fly fishing",
  path: "/fishing/",
  description: "Discover guided fishing, O’Dell Creek Fly Shop, and O’Dell Spring Creek through Rainbow Valley Lodge.",
});

export default function FishingPage() {
  return (
    <>
      <PageIntro
        kicker="THE MADISON IS CALLING"
        title={["Good water.", "Even better memories."]}
        copy="From your first cast to your favorite annual trip, make Rainbow Valley Lodge your base for time on the water."
        photo={photos.river}
      />
      <section className="section container two-column">
        <div>
          <span className="eyebrow">FISHING IS PART OF THE STORY</span>
          <h2>
            Let the river
            <br />
            lead the way.
          </h2>
        </div>
        <div>
          <p className="lead">A day outside. A bend in the river. A story to bring home.</p>
          <p>
            The Madison River’s trout waters draw anglers to the valley. Start at the lodge, get the latest local
            advice, and choose the kind of day that suits you.
          </p>
          <ArrowLink href="/contact/" label="Plan a fishing trip" />
        </div>
      </section>
      <section className="container editorial-list">
        <article>
          <Photo photo={photos.fishing} alt="Anglers with a Madison River brown trout" />
          <div>
            <span className="eyebrow">01 · GO WITH A GUIDE</span>
            <h2>River Borne Outfitters</h2>
            <p>
              Meet your guide at the lodge’s fly shop before a day on the river. Mike Treloar and his team bring local
              knowledge and instruction to drift-boat trips on the Madison and other Montana waters.
            </p>
            <ArrowLink href="/contact/" label="Ask about guided fishing" />
          </div>
        </article>
        <article>
          <Photo photo={photos.flyShop} alt="Flies at O’Dell Creek Fly Shop" />
          <div>
            <span className="eyebrow">02 · STOP IN BEFORE YOU HEAD OUT</span>
            <h2>O’Dell Creek Fly Shop</h2>
            <p>
              Inside the lodge, find flies, tackle, leaders, tippet and a conversation about what’s happening on the
              water. The shop is a natural first stop for your fishing day.
            </p>
            <ArrowLink href="/contact/" label="Visit the lodge" />
          </div>
        </article>
        <article>
          <Photo photo={photos.creek} alt="Fly fishing on O’Dell Spring Creek" />
          <div>
            <span className="eyebrow">03 · A DIFFERENT KIND OF WATER</span>
            <h2>O’Dell Spring Creek</h2>
            <p>
              Explore another side of the valley’s fishing. Ask the lodge about spring creek access, available passes
              and the details for your visit.
            </p>
            <ArrowLink
              href="https://rainbowvalleylodge.com/madison-river-fishing/odell-spring-creek/"
              label="Explore creek reservations"
              external
            />
          </div>
        </article>
      </section>
      <section className="section container">
        <div className="note-panel">
          <div>
            <h3>Make a trip of it.</h3>
            <p>The lodge offers fishing and lodging packages. Call for current options, dates and inclusions.</p>
          </div>
          <ArrowLink href={site.phone.href} label="Talk to the lodge" className="button" />
        </div>
        <p className="small-note">
          Fishing conditions and access can change. Confirm current requirements and arrangements with the lodge and
          your guide.
        </p>
      </section>
      <Closing />
    </>
  );
}

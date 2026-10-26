import { Closing } from "@/components/sections/Closing";
import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our story & your hosts",
  path: "/about/",
  description: "Meet Ed and Jeanne Williams and discover a welcoming home base in Montana’s Madison Valley.",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="A WARM WELCOME TO THE VALLEY"
        title={["A place to return to."]}
        copy="Good hospitality is personal. A friendly face, a comfortable room, and a little local knowledge can make the whole trip."
        photo={photos.lodge}
      />
      <section className="section container two-column">
        <div>
          <span className="eyebrow">MEET YOUR HOSTS</span>
          <h2>
            Ed, Jeanne,
            <br />
            and a love of Montana.
          </h2>
          <Photo photo={photos.hosts} alt="Ed and Jeanne Williams" className="hosts-full" />
        </div>
        <div>
          <p className="lead">There’s something special about being welcomed by people who know the place.</p>
          <p>
            Ed and Jeanne Williams host travelers at Rainbow Valley Lodge in Ennis. The lodge brings together anglers,
            families and people finding their way through Southwest Montana.
          </p>
          <p>
            Stay close to town, make plans over breakfast, and head out into the valley. At the end of the day, there’s
            a porch, a comfortable room and another morning to look forward to.
          </p>
          <ArrowLink href="/contact/" label="Get in touch" />
        </div>
      </section>
      <section className="fishing-feature about-feature">
        <div className="fishing-photo">
          <Photo photo={photos.pool} alt="Seasonal heated pool at Rainbow Valley Lodge" />
        </div>
        <div className="fishing-copy">
          <span className="eyebrow">THE SIMPLE THINGS, DONE WARMLY</span>
          <h2>
            A good day
            <br />
            begins here.
          </h2>
          <p>
            Continental breakfast. An on-site fly shop. A heated outdoor pool in the summer season. Comfortable lodge
            rooms, suites, and off-property cabins for your own style of stay.
          </p>
          <ArrowLink href="/stay/" label="Find your place" className="button light" />
          <p className="small-note">Pool open Memorial Day through Labor Day.</p>
        </div>
      </section>
      <Closing />
    </>
  );
}

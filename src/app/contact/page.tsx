import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/config/site";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact & directions",
  path: "/contact/",
  description: "Call Rainbow Valley Lodge, email the hosts, and find directions to the lodge in Ennis, Montana.",
});

const { address } = site;

export default function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="WE’D LOVE TO HEAR FROM YOU"
        title={["A friendly voice.", "A little local guidance."]}
        copy="Questions about rooms, fishing, or the best way to spend a few days? Start a conversation with the lodge."
      />
      <section className="section compact container contact-layout">
        <div>
          <div className="contact-item">
            <span className="eyebrow">GIVE US A CALL</span>
            <a className="contact-big" href={site.phone.href}>
              {site.phone.label}
            </a>
            <p>
              {"Toll-free "}
              <a href={site.tollFree.href}>{site.tollFree.label}</a>
              <br />
              Office open daily, 6 am–11 pm
            </p>
          </div>
          <div className="contact-item">
            <span className="eyebrow">DROP US A NOTE</span>
            <a className="contact-email" href={`mailto:${site.email}`}>
              {`${site.email} ↗`}
            </a>
            <p>Include your travel dates, party size and the type of stay you have in mind.</p>
          </div>
          <div className="contact-item">
            <span className="eyebrow">COME FIND US</span>
            <h3>
              {address.street}
              <br />
              {`${address.locality}, ${address.region} ${address.postalCode}`}
            </h3>
            <p>
              One mile south of downtown Ennis.
              <br />
              {`Mailing address: ${site.mailingAddress}.`}
            </p>
            <ArrowLink href={site.directionsUrl} label="Open directions" className="button" external />
          </div>
        </div>
        <div className="contact-image">
          <Photo photo={photos.lodge} alt="Porch and garden at Rainbow Valley Lodge" eager />
          <div>
            <span className="eyebrow">YOUR HOME BASE IN THE MADISON VALLEY</span>
            <h2>
              We’ll keep the
              <br />
              welcome warm.
            </h2>
            <ArrowLink href="/plan/" label="Plan your arrival" />
          </div>
        </div>
      </section>
    </>
  );
}

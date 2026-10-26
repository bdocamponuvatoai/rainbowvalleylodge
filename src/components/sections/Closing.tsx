import { ArrowLink } from "@/components/ui/ArrowLink";
import { Photo } from "@/components/ui/Photo";
import { photos } from "@/content/photos";

/** Closing call to action shown at the end of most pages. */
export function Closing() {
  return (
    <section className="closing">
      <Photo photo={photos.trapperPorch} alt="View from the porch of Trapper Cabin" />
      <div className="container closing-inner">
        <span className="eyebrow">THE VALLEY IS CALLING</span>
        <h2>
          Make room for
          <br />a little Montana.
        </h2>
        <ArrowLink href="/plan/" label="Plan your stay" className="button light" />
      </div>
    </section>
  );
}

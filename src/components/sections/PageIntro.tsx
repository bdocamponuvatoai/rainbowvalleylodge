import { Fragment } from "react";

import { Photo } from "@/components/ui/Photo";
import type { Photo as PhotoSource } from "@/content/photos";

type PageIntroProps = {
  kicker: string;
  /** Heading lines, joined with <br>. */
  title: string[];
  copy: string;
  /** Optional full-width panorama (the page's LCP image). */
  photo?: PhotoSource;
};

export function PageIntro({ kicker, title, copy, photo }: PageIntroProps) {
  return (
    <>
      <section className="page-intro container">
        <span className="eyebrow">{kicker}</span>
        <h1>
          {title.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p>{copy}</p>
      </section>
      {photo && (
        <div className="page-panorama container">
          <Photo photo={photo} alt={title.join(" ")} eager />
        </div>
      )}
    </>
  );
}

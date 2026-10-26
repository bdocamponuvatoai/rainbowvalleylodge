import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  path: "/privacy/",
  description: "How this website handles your trip notes, and where booking, email, phone and map links take you.",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        kicker="YOUR PRIVACY"
        title={["Privacy &", "your information."]}
        copy="How this website handles the details you enter, and where its links take you."
      />
      <section className="container prose section compact">
        <h2>Your information</h2>
        <p>
          The trip planner processes your dates and preferences in your browser. It does not send a reservation or
          contact request to the lodge. Trip dates may appear in the page URL when you use the homepage planner.
        </p>
        <p>
          When you follow a booking, email, telephone or map link, you move to a separate service. The policies of that
          service apply. Booking is completed in the lodge’s existing Checkfront system.
        </p>
        <h2>Photography and property details</h2>
        <p>
          All lodge, accommodation and regional photographs on this website come from Rainbow Valley Lodge’s website. No
          images have been generated to represent accommodation features.
        </p>
        <p>
          Details were reviewed in October 2026. Rates, availability, services and policies may change; confirm them
          with the lodge before reserving.
        </p>
        <ArrowLink href={site.privacyPolicyUrl} label="View the lodge’s privacy policy" external />
      </section>
    </>
  );
}

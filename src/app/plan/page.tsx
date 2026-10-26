import { Suspense } from "react";

import { TripPlanner } from "@/components/plan/TripPlanner";
import { TripPlannerFromQuery } from "@/components/plan/TripPlannerFromQuery";
import { Closing } from "@/components/sections/Closing";
import { FaqList } from "@/components/sections/FaqList";
import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/config/site";
import { faq, planFaq } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Plan your stay",
  path: "/plan/",
  description:
    "Plan your Montana visit, review arrival details and policies, and continue to the lodge’s secure booking system.",
});

export default function PlanPage() {
  return (
    <>
      <PageIntro
        kicker="A GOOD TRIP STARTS HERE"
        title={["Let’s get you", "to Montana."]}
        copy="Bring a few ideas. We’ll help you find your way from “someday” to a stay in the valley."
      />
      <section className="container section compact plan-layout">
        {/* The static HTML contains the empty form; query-string presets apply after hydration. */}
        <Suspense fallback={<TripPlanner />}>
          <TripPlannerFromQuery />
        </Suspense>
        <aside className="reservation-card">
          <span className="eyebrow">ALREADY KNOW YOUR DATES?</span>
          <h3>
            Your next great
            <br />
            getaway awaits.
          </h3>
          <ArrowLink href={site.bookingUrl} label="Check availability" className="button" external />
          <span className="small-note">Opens the lodge’s official Checkfront booking system.</span>
          <hr />
          <p>Prefer a friendly voice?</p>
          <a className="phone-link" href={site.phone.href}>
            {site.phone.label}
          </a>
          <p className="small-note">
            {`Office hours: ${site.officeHours}.`}
            <br />
            {"Toll-free: "}
            <a href={site.tollFree.href}>{site.tollFree.label}</a>
          </p>
        </aside>
      </section>
      <section className="container arrival-grid">
        <div>
          <span className="eyebrow">ARRIVE</span>
          <strong>After 3 pm</strong>
          <p>Check-in at the lodge.</p>
        </div>
        <div>
          <span className="eyebrow">DEPART</span>
          <strong>By 11 am</strong>
          <p>One last look at the valley.</p>
        </div>
        <div>
          <span className="eyebrow">FIND US</span>
          <strong>Ennis, Montana</strong>
          <p>{site.address.street}</p>
          <ArrowLink href="/contact/" label="Contact & directions" />
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <span className="eyebrow">A LITTLE LOCAL CLARITY</span>
          <h2>Before you arrive.</h2>
          <p>Review the current terms during booking. For special arrangements, talk with the lodge.</p>
        </div>
        <FaqList items={[...faq, ...planFaq]} />
      </section>
      <Closing />
    </>
  );
}

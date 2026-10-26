import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/PageIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `A little off the trail | ${site.name}` },
  description: "Find your way back to Rainbow Valley Lodge.",
};

export default function NotFound() {
  return (
    <>
      <PageIntro
        kicker="A LITTLE OFF THE TRAIL"
        title={["Let’s get you", "back to the valley."]}
        copy="This page could not be found. Your next adventure is still waiting."
      />
      <div className="container section compact">
        <ArrowLink href="/" label="Back to the lodge" className="button" />
      </div>
    </>
  );
}

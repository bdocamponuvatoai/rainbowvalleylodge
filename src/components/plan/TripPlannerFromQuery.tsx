"use client";

import { useSearchParams } from "next/navigation";

import { TripPlanner } from "@/components/plan/TripPlanner";
import { parseTripPreset } from "@/lib/trip";

/** Pre-fills the planner from the home page booking strip (?arrival=&departure=&guests=). */
export function TripPlannerFromQuery() {
  const preset = parseTripPreset(useSearchParams());
  return <TripPlanner key={JSON.stringify(preset)} preset={preset} />;
}

"use client";

import { useState } from "react";

import { StayCard } from "@/components/stay/StayCard";
import { stayFilters, stays, type StayCategory } from "@/content/stays";

export function StayFilter() {
  const [filter, setFilter] = useState<StayCategory | "all">("all");
  const isShown = (category: StayCategory) => filter === "all" || category === filter;
  const count = stays.filter((s) => isShown(s.category)).length;

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter accommodations">
        {stayFilters.map((f) => (
          <button
            key={f.value}
            className="filter-button"
            aria-pressed={f.value === filter}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="filter-status" role="status">
        {`Showing ${count} featured stay option${count === 1 ? "" : "s"}`}
      </p>
      <div className="stay-grid stay-list">
        {stays.map((stay) => (
          <StayCard key={stay.slug} stay={stay} hidden={!isShown(stay.category)} />
        ))}
      </div>
    </>
  );
}

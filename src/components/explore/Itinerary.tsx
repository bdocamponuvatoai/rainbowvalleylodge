"use client";

import { useState } from "react";

import { itineraries, tripStyles, type TripStyle } from "@/content/explore";

/** Suggested three-day getaways; the buttons switch between trip styles. */
export function Itinerary() {
  const [style, setStyle] = useState<TripStyle>("unwind");

  return (
    <section className="itinerary-section">
      <div className="container itinerary">
        <div>
          <span className="eyebrow">A LITTLE INSPIRATION</span>
          <h2>
            Your kind
            <br />
            of Montana.
          </h2>
          <p>
            Pick your pace for a suggested three-day getaway. These are ideas to make your own; activities and
            reservations are arranged separately.
          </p>
          <div className="itinerary-buttons" role="group" aria-label="Choose a trip style">
            {tripStyles.map((t) => (
              <button key={t.value} aria-pressed={t.value === style} onClick={() => setStyle(t.value)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div aria-live="polite">
          {itineraries[style].map((day, i) => (
            <article key={day.title} className="trip-day">
              <span>{`DAY 0${i + 1}`}</span>
              <div>
                <h3>{day.title}</h3>
                <p>{day.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

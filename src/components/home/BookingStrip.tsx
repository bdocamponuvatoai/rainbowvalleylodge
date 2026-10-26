"use client";

import { useDateRange } from "@/components/forms/useDateRange";
import { guestOptions } from "@/content/trip";

// The strip lists "2 guests" first so it is the default.
const stripGuestOptions = [guestOptions[1], guestOptions[0], ...guestOptions.slice(2)];

/** Home page date picker; submits to /plan/ as ?arrival=&departure=&guests=. */
export function BookingStrip() {
  const { arrivalRef, departureRef, arrivalMin, departureMin, onArrivalChange, onDepartureInput, validate } =
    useDateRange();

  return (
    <form
      className="booking-strip container"
      action="/plan/"
      method="get"
      onSubmit={(event) => {
        if (!validate()) event.preventDefault();
      }}
    >
      <div className="booking-title">
        <span className="eyebrow">COME ON OVER</span>
        <strong>
          Your Montana
          <br />
          starts here.
        </strong>
      </div>
      <label>
        ARRIVAL
        <input
          ref={arrivalRef}
          type="date"
          name="arrival"
          aria-label="Arrival date"
          required
          min={arrivalMin}
          onChange={onArrivalChange}
        />
      </label>
      <label>
        DEPARTURE
        <input
          ref={departureRef}
          type="date"
          name="departure"
          aria-label="Departure date"
          required
          min={departureMin}
          onInput={onDepartureInput}
        />
      </label>
      <label>
        GUESTS
        <select name="guests" aria-label="Number of guests">
          {stripGuestOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <button className="button" type="submit">
        {"Plan your stay "}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

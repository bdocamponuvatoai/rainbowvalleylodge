"use client";

import { useRef, useState, type FormEvent } from "react";
import { flushSync } from "react-dom";

import { useDateRange } from "@/components/forms/useDateRange";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/config/site";
import { guestOptions, stayPreferences } from "@/content/trip";
import { formatTripDates, formatTripDetails, type TripPreset } from "@/lib/trip";

type Summary = { dates: string; details: string };

/**
 * Trip notes form and its review panel. Both stay mounted (toggled with
 * `hidden`) so the entered values survive "Edit trip notes".
 * Nothing is sent anywhere; booking happens in Checkfront.
 */
export function TripPlanner({ preset = {} }: { preset?: TripPreset }) {
  const { arrivalRef, departureRef, arrivalMin, departureMin, onArrivalChange, onDepartureInput, validate } =
    useDateRange(preset.arrival);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [error, setError] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setError("Please choose an arrival from today onward and a later departure.");
      return;
    }
    const data = new FormData(event.currentTarget);
    const arrival = String(data.get("arrival"));
    const departure = String(data.get("departure"));
    setError("");
    flushSync(() => {
      setSummary({
        dates: formatTripDates(arrival, departure),
        details: formatTripDetails(arrival, departure, String(data.get("guests")), String(data.get("stay"))),
      });
      setReviewing(true);
    });
    summaryRef.current?.focus();
  };

  const onEdit = () => {
    flushSync(() => setReviewing(false));
    arrivalRef.current?.focus();
  };

  return (
    <div>
      <form className="trip-form" onSubmit={onSubmit} hidden={reviewing}>
        <span className="eyebrow">01 · YOUR TRIP NOTES</span>
        <h2>Picture your stay.</h2>
        <p>Keep your plans together before checking live availability with the lodge.</p>
        <div className="form-grid">
          <label>
            Arrival
            <input
              ref={arrivalRef}
              type="date"
              name="arrival"
              required
              defaultValue={preset.arrival}
              min={arrivalMin}
              onChange={onArrivalChange}
            />
          </label>
          <label>
            Departure
            <input
              ref={departureRef}
              type="date"
              name="departure"
              required
              defaultValue={preset.departure}
              min={departureMin}
              onInput={onDepartureInput}
            />
          </label>
          <label>
            Guests
            <select name="guests" defaultValue={preset.guests ?? "2"}>
              {guestOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Stay preference
            <select name="stay">
              {stayPreferences.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="form-error" role="alert">
          {error}
        </p>
        <button className="button" type="submit">
          {"Review my trip "}
          <span aria-hidden="true">→</span>
        </button>
      </form>
      <div ref={summaryRef} className="trip-summary" hidden={!reviewing} tabIndex={-1}>
        <span className="eyebrow">YOUR MONTANA PLANS</span>
        <h3>{summary?.dates}</h3>
        <p>{summary?.details}</p>
        <p>
          Now check live availability and rates in the lodge’s secure booking system. Enter and confirm your dates and
          guests there; this page does not reserve a room.
        </p>
        <ArrowLink href={site.bookingUrl} label="Continue to secure booking" className="button" external />
        <button type="button" className="text-link" onClick={onEdit}>
          Edit trip notes
        </button>
      </div>
    </div>
  );
}

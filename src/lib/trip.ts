import { parseLocalDate } from "@/lib/dates";

export type TripPreset = { arrival?: string; departure?: string; guests?: string };

const GUESTS = ["1", "2", "3", "4", "5"];
const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Reads ?arrival=&departure=&guests= sent by the home page booking strip, ignoring invalid values. */
export function parseTripPreset(params: { get(key: string): string | null }): TripPreset {
  const preset: TripPreset = {};
  const arrival = params.get("arrival");
  const departure = params.get("departure");
  const guests = params.get("guests");
  if (arrival && DATE.test(arrival)) preset.arrival = arrival;
  if (departure && DATE.test(departure)) preset.departure = departure;
  if (guests && GUESTS.includes(guests)) preset.guests = guests;
  return preset;
}

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };

/** "Jun 10, 2027 – Jun 13, 2027" */
export function formatTripDates(arrival: string, departure: string): string {
  const start = parseLocalDate(arrival).toLocaleDateString("en-US", DATE_FORMAT);
  const end = parseLocalDate(departure).toLocaleDateString("en-US", DATE_FORMAT);
  return `${start} – ${end}`;
}

/** "3 nights · 4 guests · Trapper Cabin" */
export function formatTripDetails(arrival: string, departure: string, guests: string, stay: string): string {
  const nights = Math.round((parseLocalDate(departure).getTime() - parseLocalDate(arrival).getTime()) / 86400000);
  const guestLabel = `${guests === "5" ? "5+" : guests} guest${guests === "1" ? "" : "s"}`;
  return `${nights} night${nights === 1 ? "" : "s"} · ${guestLabel} · ${stay}`;
}

"use client";

import { useRef, useState, useSyncExternalStore } from "react";

import { addDay, isValidStay, localDate } from "@/lib/dates";

const noopSubscribe = () => () => {};

/** Today's local date on the client; null while prerendering so the HTML has no stale `min`. */
function useToday(): string | null {
  return useSyncExternalStore(
    noopSubscribe,
    () => localDate(new Date()),
    () => null,
  );
}

/**
 * Arrival/departure date rules shared by the booking strip and the trip planner:
 * no past arrivals, departure at least a day after arrival, and a custom
 * validity message if the browser's own checks are bypassed.
 */
export function useDateRange(initialArrival?: string) {
  const today = useToday();
  const arrivalRef = useRef<HTMLInputElement>(null);
  const departureRef = useRef<HTMLInputElement>(null);
  // Last non-empty arrival; departure must come after it.
  const [arrivalFloor, setArrivalFloor] = useState(initialArrival ?? "");

  const onArrivalChange = () => {
    const arrival = arrivalRef.current;
    const departure = departureRef.current;
    if (!arrival?.value || !departure) return;
    setArrivalFloor(arrival.value);
    if (departure.value && departure.value <= arrival.value) departure.value = addDay(arrival.value);
  };

  /** Returns false (and shows the browser's validation bubble) when the dates are invalid. */
  const validate = (): boolean => {
    const arrival = arrivalRef.current;
    const departure = departureRef.current;
    if (!arrival || !departure) return false;
    if (!isValidStay(arrival.value, departure.value, today ?? localDate(new Date()))) {
      departure.setCustomValidity("Choose a departure date after your arrival.");
      departure.reportValidity();
      return false;
    }
    departure.setCustomValidity("");
    return true;
  };

  return {
    arrivalRef,
    departureRef,
    arrivalMin: today ?? undefined,
    departureMin: today ? addDay(arrivalFloor || today) : undefined,
    onArrivalChange,
    onDepartureInput: () => departureRef.current?.setCustomValidity(""),
    validate,
  };
}

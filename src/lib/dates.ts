// Dates are handled as local "YYYY-MM-DD" strings, matching <input type="date">.

const pad = (n: number) => String(n).padStart(2, "0");

export function localDate(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** Noon avoids DST edge cases when adding days. */
export function parseLocalDate(value: string): Date {
  return new Date(`${value}T12:00:00`);
}

export function addDay(value: string): string {
  const d = parseLocalDate(value);
  d.setDate(d.getDate() + 1);
  return localDate(d);
}

export function isValidStay(arrival: string, departure: string, today: string): boolean {
  return arrival >= today && departure > arrival;
}

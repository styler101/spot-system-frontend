export function notEmptyStringOrDefault(value: string): string {
  return value === null ? "-" : value.trim();
}

export function numberOrDefault(value: number): string {
  return typeof value === "number" && value > 0 ? String(value) : "0";
}

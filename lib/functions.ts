export function getDayAndDate(date: Date) {
  return {
    day: date.toLocaleDateString("en-US", { weekday: "long" }),
    date: date.toLocaleDateString("en-GB"),
  };
}

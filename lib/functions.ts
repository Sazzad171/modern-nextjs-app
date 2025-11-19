export function getDayAndDate(date: Date) {
  return {
    day: date.toLocaleDateString("en-US", { weekday: "long" }),
    date: date.toLocaleDateString("en-GB"),
  };
}

export function getFormattedDate(date: string) {
  const formattedDate = new Date(date);

  const formatted = formattedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formatted;
}
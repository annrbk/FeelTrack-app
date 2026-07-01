export default function getCurrentDate(locale: string = "en-US") {
  const today = new Date();
  const dayOfMonth = today.toLocaleString(locale, { day: "numeric" });
  const monthName = today.toLocaleString(locale, { month: "long" });
  const year = today.getFullYear();
  return { dayOfMonth, monthName, year };
}

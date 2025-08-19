export default function getCurrentDate() {
  const today = new Date();
  const dayOfMonth = today.toLocaleString("default", { day: "numeric" });
  const monthName = today.toLocaleString("default", { month: "long" });
  return { dayOfMonth, monthName };
}

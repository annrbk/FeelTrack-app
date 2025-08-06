export default function getTabIconName(route: { name: string }): string {
  switch (route.name) {
    case "Home":
      return "home-outline";
    case "Care":
      return "happy-outline";
    case "Statistics":
      return "stats-chart-outline";
    case "Profile":
      return "person-outline";
    default:
      return "ellipse-outline";
  }
}

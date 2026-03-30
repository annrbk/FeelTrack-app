import { Switch } from "react-native";
import type { SwitchThemeProps } from "../types/themeType";

export default function SwitchTheme({
  value,
  onValueChange,
}: SwitchThemeProps) {
  return (
    <Switch
      trackColor={{ false: "#767577", true: "#55b981" }}
      thumbColor={value === "dark" ? "#ffffff" : "#f4f3f4"}
      onValueChange={(val) => onValueChange(val ? "dark" : "light")}
      value={value === "dark"}
    />
  );
}

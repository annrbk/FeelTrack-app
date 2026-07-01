import { Switch } from "react-native";
import type { SwitchThemeProps } from "../types/themeType";
import { ThemeColors } from "../constants/theme";

export default function SwitchTheme({
  value,
  onValueChange,
}: SwitchThemeProps) {
  return (
    <Switch
      trackColor={{
        false: ThemeColors.textSecondary,
        true: ThemeColors.btnSuccess,
      }}
      thumbColor={value === "dark" ? "#ffffff" : "#f4f3f4"}
      onValueChange={(val) => onValueChange(val ? "dark" : "light")}
      value={value === "dark"}
    />
  );
}

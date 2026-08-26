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
        false: "#D0CECB",
        true: "#a1b1bd",
      }}
      thumbColor={ThemeColors.white}
      onValueChange={(val) => onValueChange(val ? "dark" : "light")}
      value={value === "dark"}
    />
  );
}

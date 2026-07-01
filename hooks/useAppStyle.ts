import { useTheme } from "../context/ThemeContext";
import { DarkThemeColors, ThemeColors } from "../constants/theme";
import { AppThemeColors } from "../types/themeType";

export const useAppStyle = <T>(
  getStyles: (colors: AppThemeColors, isDark: boolean) => T,
) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = isDark ? DarkThemeColors : ThemeColors;
  const styles = getStyles(colors, isDark);

  return { styles, colors, isDark };
};

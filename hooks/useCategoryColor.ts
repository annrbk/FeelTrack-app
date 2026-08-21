import { AppThemeColors } from "../types/themeType";
import { useAppStyle } from "./useAppStyle";
import { getStyles } from "../styles/AudioPlayer.style";

export default function useCategoryColor(
  currentCategory: { color: string } | undefined,
) {
  const { colors } = useAppStyle(getStyles);

  const categoryColorKey = currentCategory?.color as keyof AppThemeColors;
  const categoryColor =
    (categoryColorKey && colors[categoryColorKey]) || colors.btnActive;

  return categoryColor;
}

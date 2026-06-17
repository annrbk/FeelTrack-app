import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: ThemeColors.backgroundColorPrimary,
    paddingVertical: 48,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 16,
    ...typography.semiBold,
    color: ThemeColors.textPrimary,
  },
  mainContainer: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 12,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 16,
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 12,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
  },
  title: {
    fontSize: 16,
    ...typography.regular,
    color: ThemeColors.textPrimary,
  },
  emotionView: {
    width: "100%",
  },
  emotionLabel: {
    paddingVertical: 6,
    fontSize: 16,
    ...typography.regular,
    color: ThemeColors.textPrimary,
  },
  emotionTime: {
    fontSize: 14,
    ...typography.regular,
    color: ThemeColors.dividerPrimary,
  },
  emotionEmoji: {
    fontSize: 24,
  },
  itemsContainer: {
    gap: 24,
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: ThemeColors.backgroundColorPrimary,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    borderRadius: 10,
    padding: 12,
    gap: 24,
  },
});

import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingTop: 50,
    backgroundColor: ThemeColors.backgroundColorPrimary,
    alignItems: "stretch",
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    margin: 8,
  },
  emotionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ThemeColors.surfacePrimary,
    borderRadius: 6,
    width: 36,
    height: 32,
  },
  title: {
    fontSize: 20,
    ...typography.semiBold,
    marginHorizontal: 16,
    marginBottom: 6,
    marginTop: 20,
    color: ThemeColors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    ...typography.regular,
    color: ThemeColors.textPrimary,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    padding: 6,
    gap: 8,
  },
  monthText: {
    fontSize: 18,
    ...typography.medium,
    color: ThemeColors.textPrimary,
  },
  emotionText: {
    fontSize: 10,
    marginLeft: 2,
    color: ThemeColors.textPrimary,
  },
  emotionTextSmile: {
    fontSize: 10,
    color: ThemeColors.textPrimary,
  },
  calendarStyle: {
    height: 470,
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: ThemeColors.borderPrimary,
    ...shadow,
    overflow: "hidden",
  },
});

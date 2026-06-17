import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    alignItems: "stretch",
    paddingTop: 50,
    backgroundColor: ThemeColors.backgroundColorPrimary,
  },
  section: {
    flex: 1,
    paddingVertical: 16,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-evenly",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    ...typography.semiBold,
    color: ThemeColors.textPrimary,
    marginHorizontal: 16,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    ...typography.regular,
    color: ThemeColors.textPrimary,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  imageWrapper: {
    width: "46%",
    margin: "2%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  imageTitleContainer: {
    position: "absolute",
    backgroundColor: ThemeColors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    top: 10,
    left: 10,
    ...shadow,
  },
  sessionContainer: {
    position: "absolute",
    backgroundColor: ThemeColors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    bottom: 10,
    right: 10,
    ...shadow,
  },
  imageTitle: {
    fontSize: 14,
    ...typography.medium,
    color: ThemeColors.textPrimary,
  },
  sessionText: {
    fontSize: 14,
    ...typography.medium,
    color: ThemeColors.textPrimary,
  },
});

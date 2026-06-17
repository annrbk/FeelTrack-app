import { StyleSheet } from "react-native";
import { ThemeColors, shadow } from "../constants/theme";
import { typography } from "./typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.backgroundColorPrimary,
  },
  backButtonContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: ThemeColors.borderPrimary,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    ...typography.semiBold,
    color: ThemeColors.textPrimary,
  },
  headerSubtitle: {
    fontSize: 14,
    ...typography.regular,
    color: ThemeColors.textSecondary,
    marginTop: 4,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: ThemeColors.white,
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: ThemeColors.dividerPrimary,
    ...shadow,
  },
  trackNumber: {
    width: 30,
    fontSize: 15,
    ...typography.medium,
    color: ThemeColors.textSecondary,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 12,
  },
  trackTitle: {
    fontSize: 15,
    ...typography.medium,
    color: ThemeColors.textPrimary,
    marginBottom: 2,
  },
  trackAlbum: {
    fontSize: 13,
    ...typography.regular,
    color: ThemeColors.textSecondary,
  },
  trackDuration: {
    fontSize: 13,
    ...typography.regular,
    color: ThemeColors.textSecondary,
    marginLeft: 12,
  },
});

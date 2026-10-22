import { Alert, Linking } from "react-native";

export const openExternalUrl = async (url?: string) => {
  if (!url) {
    Alert.alert("Error", "The link is unavailable.");
    return;
  }

  try {
    const canOpen = await Linking.canOpenURL(url);
    if (!canOpen) {
      Alert.alert("Error", "The link cannot be opened on this device.");
      return;
    }
    await Linking.openURL(url);
  } catch (error) {
    console.error("Unable to open external URL:", error);
    Alert.alert("Error", "The link cannot be opened on this device.");
  }
};

import { Alert, Linking } from "react-native";
import { useTranslation } from "react-i18next";

export const useContactUs = () => {
  const { t } = useTranslation();

  const handleContactUs = async () => {
    try {
      await Linking.openURL("mailto:support.mindery@gmail.com");
    } catch (error) {
      console.error("Unable to open the mail app:", error);
      Alert.alert(
        t("settingsScreen.mailUnavailableTitle"),
        t("settingsScreen.mailUnavailableMessage"),
      );
    }
  };

  return { handleContactUs };
};

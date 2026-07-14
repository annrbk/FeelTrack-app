import { View, Text, Pressable } from "react-native";
import BackButton from "../components/BackButton";
import { getStyles } from "../styles/ChangeLanguageScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupCalendarLocale } from "../i18next/calendarLocales";

export default function ChangeLanguageScreen() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const { styles } = useAppStyle(getStyles);

  const changeLanguage = async (lang: string) => {
    try {
      await AsyncStorage.setItem("language", lang);
      i18n.changeLanguage(lang);
      setupCalendarLocale(lang);
    } catch (error) {
      console.error("Error saving language:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>
          {t("settingsScreen.languageTitle")}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable
          style={[
            styles.languageButton,
            currentLang === "be" && styles.languageButtonActive,
          ]}
          onPress={() => {
            changeLanguage("be");
          }}
        >
          <Text
            style={[
              styles.languageText,
              currentLang === "be" && styles.languageTextActive,
            ]}
          >
            Беларуская
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.languageButton,
            currentLang === "en" && styles.languageButtonActive,
          ]}
          onPress={() => changeLanguage("en")}
        >
          <Text
            style={[
              styles.languageText,
              currentLang === "en" && styles.languageTextActive,
            ]}
          >
            English
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.languageButton,
            currentLang === "ru" && styles.languageButtonActive,
          ]}
          onPress={() => changeLanguage("ru")}
        >
          <Text
            style={[
              styles.languageText,
              currentLang === "ru" && styles.languageTextActive,
            ]}
          >
            Русский
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

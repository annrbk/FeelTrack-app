import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./locales/en";
import be from "./locales/be";
import ru from "./locales/ru";
import { setupCalendarLocale } from "./calendarLocales";

export const lng = getLocales()[0].languageCode ?? "en";

const languageStorage = {
  type: "languageDetector" as const,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        setupCalendarLocale(savedLanguage);
        return callback(savedLanguage);
      }
    } catch (error) {
      console.error("Error reading language from AsyncStorage:", error);
    }
    setupCalendarLocale(lng);
    callback(lng);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageStorage)
  .use(initReactI18next)
  .init({
    resources: { en, be, ru },
    fallbackLng: "en",
    supportedLngs: ["en", "be", "ru"],
    interpolation: { escapeValue: false },
  });

export default i18n;

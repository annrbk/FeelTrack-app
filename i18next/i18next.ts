import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import en from "./locales/en";
import be from "./locales/be";
import ru from "./locales/ru";
import { setupCalendarLocale } from "./calendarLocales";

export const lng = getLocales()[0].languageCode ?? "en";

i18n.use(initReactI18next).init({
  resources: {
    en,
    be,
    ru,
  },
  lng,
  fallbackLng: "en",
  supportedLngs: ["en", "be", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

setupCalendarLocale(lng);

export default i18n;

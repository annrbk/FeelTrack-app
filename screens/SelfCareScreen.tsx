import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "../styles/SelfCareScreen.styles";
import CareSection from "../components/CareSection";
import { careData } from "../constants/careData";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function SelfCareScreen() {
  const { styles } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <CareSection
        data={careData}
        title={t("careScreen.title")}
        subtitle={t("careScreen.subtitle")}
      />
    </SafeAreaView>
  );
}

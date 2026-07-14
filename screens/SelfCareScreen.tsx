import React from "react";
import { View } from "react-native";
import { getStyles } from "../styles/SelfCareScreen.styles";
import CareSection from "../components/CareSection";
import { careData } from "../constants/careData";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function SelfCareScreen() {
  const { styles } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <CareSection
        data={careData}
        title={t("careScreen.title")}
        subtitle={t("careScreen.subtitle")}
      />
    </View>
  );
}

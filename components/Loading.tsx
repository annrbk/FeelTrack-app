import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAppStyle } from "../hooks/useAppStyle";
import { getStyles } from "../styles/Loading.styles";
import { useTranslation } from "react-i18next";

export default function Loading() {
  const { colors, styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.btnPrimary} />
        <Text style={styles.text}>{t("loadingScreen.loadingText")}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

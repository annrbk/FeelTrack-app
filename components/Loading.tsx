import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAppStyle } from "../hooks/useAppStyle";
import { getStyles } from "../styles/Loading.styles";

export default function Loading() {
  const { colors, styles } = useAppStyle(getStyles);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.btnPrimary} />
        <Text style={styles.text}>Loading...</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

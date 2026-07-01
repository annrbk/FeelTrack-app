import React from "react";
import { View } from "react-native";
import { getStyles } from "../styles/SelfCareScreen.styles";
import CareSection from "../components/CareSection";
import { careData } from "../constants/careData";
import { useAppStyle } from "../hooks/useAppStyle";

export default function SelfCareScreen() {
  const { styles } = useAppStyle(getStyles);

  return (
    <View style={styles.container}>
      <CareSection
        data={careData}
        title="Your Inner Harmony"
        subtitle="Slow down, breathe deeply, and reconnect with your calm"
      />
    </View>
  );
}

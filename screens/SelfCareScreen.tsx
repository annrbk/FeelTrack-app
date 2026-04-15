import React from "react";
import { View } from "react-native";
import { styles } from "../styles/SelfCareScreen.styles";
import CareSection from "../components/CareSection";
import { careData } from "../constants/careData";

export default function SelfCareScreen() {
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

import React from "react";
import { View } from "react-native";
import { styles } from "../styles/SelfCareScreen.styles";
import CareSection from "../components/CareSection";
import { careData } from "../constants/careData";
import TestSection from "../components/TestSection";
import { testData } from "../constants/tests/testData";

export default function SelfCareScreen() {
  return (
    <View style={styles.container}>
      <CareSection
        data={careData}
        title="Your Inner Harmony"
        subtitle="Slow down, breathe deeply, and reconnect with your calm"
      />
      <TestSection
        data={testData}
        title="Discover Yourself Deeper"
        subtitle="Take short tests to better understand your emotions and needs"
      />
    </View>
  );
}

import React from "react";
import { View } from "react-native";
import { styles } from "../styles/SelfCareScreen.styles";
import CareSection from "../components/CareSection";

const data = [
  { id: "1", image: require("../assets/meditation/1.jpg") },
  { id: "2", image: require("../assets/meditation/2.jpg") },
  { id: "3", image: require("../assets/meditation/3.jpg") },
  { id: "4", image: require("../assets/meditation/4.jpg") },
  { id: "5", image: require("../assets/meditation/5.jpg") },
];

export default function SelfCareScreen() {
  return (
    <View style={styles.container}>
      <CareSection
        data={data}
        title="Your Inner Harmony"
        subtitle="Slow down, breathe deeply, and reconnect with your calm"
      />
      <CareSection
        data={data}
        title="Discover Yourself Deeper"
        subtitle="Take short tests to better understand your emotions and needs"
      />
    </View>
  );
}

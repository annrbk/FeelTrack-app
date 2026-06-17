import { ActivityIndicator, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeColors } from "../constants/theme";
import { typography } from "../styles/typography";

export default function Loading() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: ThemeColors.backgroundColorPrimary,
        }}
      >
        <ActivityIndicator size="large" color={ThemeColors.btnPrimary} />
        <Text
          style={{
            marginTop: 12,
            color: ThemeColors.textPrimary,
            ...typography.regular,
          }}
        >
          Loading...
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

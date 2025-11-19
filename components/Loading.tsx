import { ActivityIndicator, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Loading() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#2e86de" />
        <Text>Loading...</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

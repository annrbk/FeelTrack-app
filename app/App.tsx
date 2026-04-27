import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/AppNavigator";
import { SessionProvider } from "../ctx";
import { PlayerProvider } from "../PlayerContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../components/BottomSheet";
import { ThemeProvider } from "../context/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SessionProvider>
          <PlayerProvider>
            <ThemeProvider>
              <NavigationContainer>
                <MyStack />
                <BottomSheet />
              </NavigationContainer>
            </ThemeProvider>
          </PlayerProvider>
        </SessionProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

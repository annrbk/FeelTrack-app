import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/AppNavigator";
import { SessionProvider } from "../ctx";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SessionProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </SessionProvider>
    </GestureHandlerRootView>
  );
}

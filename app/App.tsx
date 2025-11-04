import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/AppNavigator";
import { SessionProvider } from "../ctx";

export default function App() {
  return (
    <SessionProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SessionProvider>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

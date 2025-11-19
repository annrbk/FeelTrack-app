import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../screens/FirstScreen";
import AuthScreen from "../screens/AuthScreen";
import { RootStackParamList } from "./types";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomTabs from "./BottomTabs";
import { useSession } from "../ctx";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function MyStack() {
  const { session } = useSession();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!session ? (
        <>
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="Authentication" component={AuthScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainApp" component={BottomTabs} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

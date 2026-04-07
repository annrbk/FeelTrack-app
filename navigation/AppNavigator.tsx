import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../screens/FirstScreen";
import AuthScreen from "../screens/AuthScreen";
import { RootStackParamList } from "./types";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomTabs from "./BottomTabs";
import { useSession } from "../ctx";
import AccountScreen from "../screens/AccountScreen";
import MeditationListScreen from "../screens/MeditationListScreen";
import TestScreen from "../screens/TestScreen";
import ResultScreen from "../screens/ResultScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StatsByDayScreen from "../screens/StatsByDayScreen";

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
          <Stack.Screen
            name="MeditationList"
            component={MeditationListScreen}
          />
          <Stack.Screen name="TestScreen" component={TestScreen} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="StatsByDay" component={StatsByDayScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

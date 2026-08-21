import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";
import FirstScreen from "../screens/FirstScreen";
import AuthScreen from "../screens/AuthScreen";
import { RootStackParamList } from "./types";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomTabs from "./BottomTabs";
import { useSession } from "../ctx";
import AccountScreen from "../screens/AccountScreen";
import MeditationListScreen from "../screens/MeditationListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StatsByDayScreen from "../screens/StatsByDayScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import ChangeLanguageScreen from "../screens/ChangeLanguageScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

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
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainApp" component={BottomTabs} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen
            name="MeditationList"
            component={MeditationListScreen}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="StatsByDay" component={StatsByDayScreen} />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
          />
          <Stack.Screen
            name="ChangeLanguage"
            component={ChangeLanguageScreen}
          />
          <Stack.Screen name="About" component={AboutScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

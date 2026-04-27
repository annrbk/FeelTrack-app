import { createStackNavigator } from "@react-navigation/stack";
import SelfCareScreen from "../screens/SelfCareScreen";
import MeditationListScreen from "../screens/MeditationListScreen";
import { CareStackParamList } from "./careStackTypes";

const Stack = createStackNavigator<CareStackParamList>();

export default function CareStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelfCare" component={SelfCareScreen} />
      <Stack.Screen name="MeditationList" component={MeditationListScreen} />
    </Stack.Navigator>
  );
}

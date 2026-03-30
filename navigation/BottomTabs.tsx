import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SelfCareScreen from "../screens/SelfCareScreen";
import StatsScreen from "../screens/StatsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import getTabIconName from "../utils/getTabIconName";
import { useTheme } from "../context/ThemeContext";
import { ThemeColors } from "../constants/theme";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = getTabIconName(route);
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor:
            theme === "dark" ? ThemeColors.secondaryDark : ThemeColors.light,
        },
        tabBarActiveTintColor: "#2e86de",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Care" component={SelfCareScreen} />
      <Tab.Screen name="Statistics" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

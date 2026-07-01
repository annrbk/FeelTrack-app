import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatsScreen from "../screens/StatsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import getTabIconName from "../utils/getTabIconName";
import { useTheme } from "../context/ThemeContext";
import { DarkThemeColors, ThemeColors } from "../constants/theme";
import { usePlayer } from "../PlayerContext";
import CareStack from "./CareStack";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { theme } = useTheme();
  const player = usePlayer();

  const isDark = theme === "dark";
  const colors = isDark ? DarkThemeColors : ThemeColors;

  return (
    <Tab.Navigator
      screenListeners={{
        tabPress: () => {
          player.clearTrack();
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = getTabIconName(route);
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: colors.borderPrimary,
          backgroundColor: colors.backgroundColorPrimary,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: colors.btnPrimary,
        tabBarInactiveTintColor: colors.btnInactive,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Care" component={CareStack} />
      <Tab.Screen name="Statistics" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

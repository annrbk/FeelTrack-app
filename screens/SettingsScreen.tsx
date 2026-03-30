import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import SwitchTheme from "../components/SwitchTheme";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles/SettingsScreen.styles";

export default function SettingsScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { theme, switchTheme } = useTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.settingHeader}>
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            style={styles.backButton}
          >
            <Text>Back</Text>
          </Pressable>
          <View style={styles.settingTitleContainer}>
            <Text style={styles.title}>Settings</Text>
          </View>

          <View style={styles.rightPart}></View>
        </View>

        <View style={styles.themeContainer}>
          <Text>Theme</Text>
          <SwitchTheme value={theme} onValueChange={switchTheme} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

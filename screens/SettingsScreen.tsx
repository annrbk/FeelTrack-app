import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import SwitchTheme from "../components/SwitchTheme";
import { useTheme } from "../context/ThemeContext";
import { getStyles } from "../styles/SettingsScreen.styles";
import BackButton from "../components/BackButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useAccount } from "../hooks/useAccount";
import { useAppStyle } from "../hooks/useAppStyle";

export default function SettingsScreen() {
  const { theme, switchTheme } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    handleDeleteAccount,
    isDeleteAccountModalVisible,
    setDeleteAccountModalVisible,
  } = useAccount();

  const { styles, colors } = useAppStyle(getStyles);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.settingHeader}>
          <BackButton />
          <View style={styles.settingTitleContainer}>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
          <View style={styles.rightPart}></View>
        </View>
        <View style={styles.mainSettingContainer}>
          <View style={styles.passwordContainer}>
            <Pressable
              style={styles.buttonArrowRight}
              accessibilityRole="button"
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Text style={styles.settingTitle}>Change password</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={colors.textSecondary}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.themeContainer}>
          <Text style={styles.settingTitle}>Theme</Text>
          <SwitchTheme value={theme} onValueChange={switchTheme} />
        </View>
        <View>
          <Pressable
            style={styles.settingItem}
            onPress={() => setDeleteAccountModalVisible(true)}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>Delete account</Text>
          </Pressable>
        </View>
        {isDeleteAccountModalVisible && (
          <DeleteAccountModal
            visible={isDeleteAccountModalVisible}
            onClose={() => setDeleteAccountModalVisible(false)}
            text={"Delete account?"}
            onConfirm={handleDeleteAccount}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

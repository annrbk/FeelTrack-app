import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "../styles/ProfileScreen.styles";
import { useSession } from "../ctx";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { avatars } from "../constants/avatars";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { user, signOut } = useSession();
  const selectedAvatar = avatars.find((a) => a.id === user?.avatar)?.image;

  const { styles, colors, isDark } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          {selectedAvatar ? (
            <Image style={styles.avatar} source={selectedAvatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons
                name="person-outline"
                size={28}
                color={isDark ? colors.btnPrimary : colors.textSecondary}
              />
            </View>
          )}
          <View>
            <Text style={styles.name}>{user?.name || "User"}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <Pressable
            onPress={() => navigation.navigate("Account")}
            style={styles.settingItem}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>
              {t("profileScreen.editButtonText")}
            </Text>
          </Pressable>
          <Pressable
            style={styles.settingItem}
            onPress={() => navigation.navigate("Settings")}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>
              {t("profileScreen.settingsButtonText")}
            </Text>
          </Pressable>
          <Pressable
            style={styles.settingItemLast}
            onPress={signOut}
            accessibilityRole="button"
          >
            <Text style={[styles.settingText, { color: colors.btnWarning }]}>
              {t("profileScreen.logoutButtonText")}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

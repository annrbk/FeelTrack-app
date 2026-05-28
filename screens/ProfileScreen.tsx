import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/ProfileScreen.styles";
import { useSession } from "../ctx";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { avatars } from "../constants/avatars";

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { user, signOut } = useSession();
  const selectedAvatar = avatars.find((a) => a.id === user?.avatar)?.image;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          {selectedAvatar ? (
            <Image style={styles.avatar} source={selectedAvatar} />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}
          <View>
            <Text style={styles.name}>{user?.name || "User"}</Text>
            {user?.number && <Text style={styles.email}>{user.number}</Text>}
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <Pressable
            onPress={() => navigation.navigate("Account")}
            style={styles.settingItem}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>Edit profile</Text>
          </Pressable>
          <Pressable
            style={styles.settingItem}
            onPress={() => navigation.navigate("Settings")}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>Settings</Text>
          </Pressable>
          <Pressable
            style={styles.settingItemLast}
            onPress={signOut}
            accessibilityRole="button"
          >
            <Text style={[styles.settingText, { color: "#e05555" }]}>
              Logout
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/ProfileScreen.styles";
import { useSession } from "../ctx";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { user, signOut } = useSession();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} />
          <View>
            <Text style={styles.name}>{user?.name || "User"}</Text>
            <Text style={styles.email}>{user?.number || null}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <Pressable
            onPress={() => navigation.navigate("Account")}
            style={styles.settingItem}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>My account</Text>
          </Pressable>
          <Pressable
            style={styles.settingItem}
            onPress={() => navigation.navigate("Settings")}
            accessibilityRole="button"
          >
            <Text style={styles.settingText}>Settings</Text>
          </Pressable>
          <Pressable
            style={styles.settingItem}
            onPress={signOut}
            accessibilityRole="button"
          >
            <Text style={[styles.settingText, { color: "red" }]}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

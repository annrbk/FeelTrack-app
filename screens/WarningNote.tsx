import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "../styles/WarningNote.styles";
import BackButton from "../components/BackButton";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function WarningNoteScreen({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton />
        </View>
        <View style={styles.content}>
          <View style={styles.warningContainer}>
            <Ionicons name="alert-circle" size={48} color="#c81515" />
            <Text style={styles.warningText}>
              The results of this online test are not a diagnosis and do not
              replace consultation with a qualified professional. If you have
              any concerns about your condition, please consult a qualified
              specialist.
            </Text>
          </View>
          <Pressable
            onPress={onStart}
            accessibilityRole="button"
            style={styles.button}
          >
            <Text>Begin</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

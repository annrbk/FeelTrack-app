import { Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/ChangePassword.styles";
import BackButton from "../components/BackButton";
import SuccessModal from "../components/SuccessModal";
import { useChangePassword } from "../hooks/useChangePassword";

export default function ChangePasswordScreen() {
  const {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    edit,
    setEdit,
    showSuccessModal,
    setShowSuccessModal,
    toEdit,
    changePassword,
    onCloseModal,
  } = useChangePassword();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.passwordHeader}>
          <BackButton />
          <View style={styles.passwordTitleContainer}>
            <Text style={styles.headerTitle}>Change password</Text>
          </View>
          <View style={styles.rightPart}></View>
        </View>
        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>Current password</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setPassword}
              value={password}
              editable={edit}
              placeholder="Enter password"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>New password</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setNewPassword}
              value={newPassword}
              editable={edit}
              placeholder="Enter new password"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            accessibilityRole="button"
            onPress={changePassword}
          >
            <Text style={styles.buttonText}>Change password</Text>
          </Pressable>
        </View>
        {showSuccessModal && (
          <SuccessModal
            visible={showSuccessModal}
            onClose={onCloseModal}
            text={"Password updated successfully!"}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "../styles/ChangePassword.styles";
import BackButton from "../components/BackButton";
import SuccessModal from "../components/SuccessChangesModal";
import { useChangePassword } from "../hooks/useChangePassword";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ChangePasswordScreen() {
  const {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    edit,
    showSuccessModal,
    changePassword,
    onCloseModal,
    showPassword,
    setShowPassword,
    showNewPassword,
    setShowNewPassword,
  } = useChangePassword();

  const { colors, styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.passwordHeader}>
          <BackButton />
          <View style={styles.passwordTitleContainer}>
            <Text style={styles.headerTitle}>
              {t("settingsScreen.changePasswordTitle")}
            </Text>
          </View>
          <View style={styles.rightPart}></View>
        </View>
        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>
              {t("settingsScreen.currentPasswordLabel")}
            </Text>
            <View style={{ width: "100%", position: "relative" }}>
              <TextInput
                style={[styles.input, edit && styles.editInput]}
                onChangeText={setPassword}
                value={password}
                editable={edit}
                placeholder={t("settingsScreen.currentPasswordPlaceholder")}
                placeholderTextColor={colors.textSecondary}
                secureTextEntry={!showPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color={colors.textPrimary}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>
              {t("settingsScreen.newPasswordLabel")}
            </Text>
            <View style={{ width: "100%", position: "relative" }}>
              <TextInput
                style={[styles.input, edit && styles.editInput]}
                onChangeText={setNewPassword}
                value={newPassword}
                editable={edit}
                placeholder={t("settingsScreen.newPasswordPlaceholder")}
                placeholderTextColor={colors.textSecondary}
                secureTextEntry={!showNewPassword}
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setShowNewPassword((prev) => !prev)}
              >
                <Ionicons
                  name={showNewPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color={colors.textPrimary}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            accessibilityRole="button"
            onPress={changePassword}
          >
            <Text style={styles.buttonText}>
              {t("settingsScreen.changePasswordButton")}
            </Text>
          </Pressable>
        </View>
        {showSuccessModal && (
          <SuccessModal
            visible={showSuccessModal}
            onClose={onCloseModal}
            text={t("successModal.closeButtonText")}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

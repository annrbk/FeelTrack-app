import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Loading from "../components/Loading";
import SuccessChangesModal from "../components/SuccessChangesModal";
import { useAccount } from "../hooks/useAccount";
import BackButton from "../components/BackButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import AvatarModal from "../components/AvatarModal";
import { useSession } from "../ctx";
import { avatars } from "../constants/avatars";
import { getStyles } from "../styles/AccountScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function AccountScreen() {
  const {
    name,
    email,
    number,
    dateOfBirth,
    edit,
    loading,
    showSuccessModal,
    setName,
    setEmail,
    setNumber,
    setDateOfBirth,
    toEdit,
    addChanges,
    onCloseModal,
  } = useAccount();
  const { user } = useSession();

  const [changeAvatar, setChangeAvatar] = useState(false);

  const { colors, styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerCard}>
          <View style={styles.header}>
            <BackButton />
            <Text style={styles.headerTitle}>
              {t("accountScreen.headerTitle")}
            </Text>
            <Pressable onPress={toEdit} accessibilityRole="button">
              <Text style={styles.headerAction}>
                {edit
                  ? t("accountScreen.cancelButtonText")
                  : t("accountScreen.editButtonText")}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.avatarCard}>
          <View style={styles.avatarContainer}>
            {user?.avatar ? (
              <Image
                style={styles.avatar}
                source={avatars.find((a) => a.id === user.avatar)?.image}
              />
            ) : (
              <View style={styles.avatar} />
            )}
            <Pressable
              accessibilityRole="button"
              style={styles.addIcon}
              onPress={() => setChangeAvatar(true)}
            >
              <Ionicons
                name="add-outline"
                size={22}
                color={colors.btnPrimary}
              />
            </Pressable>
          </View>
        </View>
        {changeAvatar && (
          <AvatarModal
            visible={changeAvatar}
            onClose={() => setChangeAvatar(false)}
            text={t("avatarModal.title")}
          />
        )}
        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>
              {t("accountScreen.usernameLabel")}
            </Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setName}
              value={name}
              editable={edit}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>
              {t("accountScreen.emailLabel")}
            </Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setEmail}
              value={email}
              editable={edit}
            />
          </View>
        </View>
        {edit && (
          <View style={styles.saveContainer}>
            <Pressable
              style={styles.button}
              accessibilityRole="button"
              onPress={addChanges}
            >
              <Text style={styles.buttonText}>
                {t("accountScreen.saveButtonText")}
              </Text>
            </Pressable>
          </View>
        )}
        {showSuccessModal && (
          <SuccessChangesModal
            visible={showSuccessModal}
            onClose={onCloseModal}
            text={t("successChangesModal.closeButtonText")}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

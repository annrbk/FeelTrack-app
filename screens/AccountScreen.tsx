import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/AccountScreen.styles";
import Calendar from "../components/Calendar";
import Loading from "../components/Loading";
import SuccessModal from "../components/SuccessModal";
import { useAccount } from "../hooks/useAccount";
import BackButton from "../components/BackButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import AvatarModal from "../components/AvatarModal";
import { useSession } from "../ctx";
import { avatars } from "../constants/avatars";

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

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerCard}>
          <View style={styles.header}>
            <BackButton />
            <Text style={styles.headerTitle}>My account</Text>
            <Pressable onPress={toEdit} accessibilityRole="button">
              <Text style={styles.headerAction}>
                {edit ? "Cancel" : "Edit"}
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
              <Ionicons name="add-outline" size={22} color="#1c3249" />
            </Pressable>
          </View>
        </View>
        {changeAvatar && (
          <AvatarModal
            visible={changeAvatar}
            onClose={() => setChangeAvatar(false)}
            text={"Choose your avatar"}
          />
        )}
        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setName}
              value={name}
              editable={edit}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setEmail}
              value={email}
              editable={edit}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>Phone number</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setNumber}
              value={number}
              placeholder="Add number"
              keyboardType="phone-pad"
              editable={edit}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <Calendar
              onDateChange={setDateOfBirth}
              initialDate={dateOfBirth}
              disabled={!edit}
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
              <Text style={styles.buttonText}>Save changes</Text>
            </Pressable>
          </View>
        )}
        {showSuccessModal && (
          <SuccessModal
            visible={showSuccessModal}
            onClose={onCloseModal}
            text={"Changes saved!"}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

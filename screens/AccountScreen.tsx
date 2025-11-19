import React from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/AccountScreen.styles";
import Calendar from "../components/Calendar";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import Loading from "../components/Loading";
import SuccessModal from "../components/SuccessModal";
import { useAccount } from "../hooks/useAccount";

export default function AccountScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
          >
            <Text>Back</Text>
          </Pressable>
          <Pressable onPress={toEdit} accessibilityRole="button">
            <Text>{edit ? "Cancel" : "Edit"}</Text>
          </Pressable>
        </View>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} />
        </View>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setName}
              value={name}
              editable={edit}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={[styles.input, edit && styles.editInput]}
              onChangeText={setEmail}
              value={email}
              editable={edit}
            />
          </View>
          <View>
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
          <View>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <Calendar
              onDateChange={setDateOfBirth}
              initialDate={dateOfBirth}
              disabled={!edit}
            />
          </View>
        </View>
        {edit && (
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              accessibilityRole="button"
              onPress={addChanges}
            >
              <Text>Save changes</Text>
            </Pressable>
          </View>
        )}
        {showSuccessModal && (
          <SuccessModal visible={showSuccessModal} onClose={onCloseModal} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

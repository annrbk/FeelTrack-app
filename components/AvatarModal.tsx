import { Modal, View, Text, Pressable } from "react-native";
import { showModalProps } from "../types/modalType";
import { styles } from "../styles/AvatarModal.styles";
import { Image } from "react-native";
import { useAvatar } from "../hooks/useAvatar";

export default function AvatarModal({
  visible,
  onClose,
  text,
}: showModalProps) {
  const { avatar, setAvatar, changeAvatar } = useAvatar();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.avatarContainer}>
            <Text>{text}</Text>
            <View style={styles.avatars}>
              <Pressable
                onPress={() => setAvatar("1")}
                style={
                  avatar === "1" ? styles.avatarActive : styles.avatarButton
                }
              >
                <Image
                  source={require("../assets/avatars/avatar_1.png")}
                  style={styles.avatar}
                />
              </Pressable>
              <Pressable
                onPress={() => setAvatar("2")}
                style={
                  avatar === "2" ? styles.avatarActive : styles.avatarButton
                }
              >
                <Image
                  source={require("../assets/avatars/avatar_2.png")}
                  style={styles.avatar}
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={async () => {
              await changeAvatar(avatar);
              onClose();
            }}
          >
            <Text style={styles.buttonText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

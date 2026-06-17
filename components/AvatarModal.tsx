import { Modal, View, Text, Pressable } from "react-native";
import { showModalProps } from "../types/modalType";
import { styles } from "../styles/AvatarModal.styles";
import { Image } from "react-native";
import { useAvatar } from "../hooks/useAvatar";
import { avatars } from "../constants/avatars";
import Ionicons from "@expo/vector-icons/Ionicons";

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
          <Pressable style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close-outline" size={24} color="#3d403b" />
          </Pressable>
          <View style={styles.avatarContainer}>
            <Text style={styles.modalText}>{text}</Text>
            <View style={styles.avatars}>
              {avatars.map((a) => (
                <Pressable
                  key={a.id}
                  onPress={() => setAvatar(a.id)}
                  style={
                    avatar === a.id ? styles.avatarActive : styles.avatarButton
                  }
                >
                  <Image source={a.image} style={styles.avatar} />
                </Pressable>
              ))}
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

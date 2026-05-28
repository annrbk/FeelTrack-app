import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "../styles/DeleteAccountModal.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DeleteAccountModalProps } from "../types/accountValuesType";

export default function DeleteAccountModal({
  visible,
  onClose,
  text,
  onConfirm,
}: DeleteAccountModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close-outline" size={24} color="#1a1a1a" />
          </Pressable>
          <Ionicons name="warning-outline" size={48} color="#e05555" />
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.deleteButton} onPress={onConfirm}>
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

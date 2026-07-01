import { Modal, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DeleteAccountModalProps } from "../types/accountValuesType";
import { getStyles } from "../styles/DeleteAccountModal.styles";
import { useAppStyle } from "../hooks/useAppStyle";

export default function DeleteAccountModal({
  visible,
  onClose,
  text,
  onConfirm,
}: DeleteAccountModalProps) {
  const { colors, styles } = useAppStyle(getStyles);

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
            <Ionicons
              name="close-outline"
              size={24}
              color={colors.textSecondary}
            />
          </Pressable>
          <Ionicons
            name="warning-outline"
            size={48}
            color={colors.btnWarning}
          />
          <Text style={styles.modalText}>{text}</Text>
          <Text style={styles.modalSubText}>
            This action cannot be undone. All your data will be permanently
            removed.
          </Text>
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

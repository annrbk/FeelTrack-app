import { Modal, View, Text, Pressable } from "react-native";
import { showModalProps } from "../types/modalType";
import { styles } from "../styles/StatsModal.styles";

export default function StatsModal({ visible, onClose, text }: showModalProps) {
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
          <View>
            <Text>{text}</Text>
          </View>
          <Pressable style={styles.button} onPress={() => onClose()}>
            <Text style={styles.buttonText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

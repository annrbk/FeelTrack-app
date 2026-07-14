import { Modal, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DeleteAccountModalProps } from "../types/accountValuesType";
import { getStyles } from "../styles/DeleteAccountModal.styles";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function DeleteAccountModal({
  visible,
  onClose,
  text,
  onConfirm,
}: DeleteAccountModalProps) {
  const { colors, styles } = useAppStyle(getStyles);

  const { t } = useTranslation();

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
            {t("deleteAccountModal.description")}
          </Text>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>
                {t("deleteAccountModal.cancelButtonText")}
              </Text>
            </Pressable>
            <Pressable style={styles.deleteButton} onPress={onConfirm}>
              <Text style={styles.deleteText}>
                {t("deleteAccountModal.deleteButtonText")}{" "}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

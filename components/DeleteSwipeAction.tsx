import { Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { getStyles } from "../styles/MainScreen.styles";
import { useAppStyle } from "../hooks/useAppStyle";

export type DeleteSwipeActionProps = {
  onDelete: () => void;
};

export default function DeleteSwipeAction({
  onDelete,
}: DeleteSwipeActionProps) {
  const { styles } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteButtonText}>{t("home.deleteButtonText")}</Text>
    </TouchableOpacity>
  );
}

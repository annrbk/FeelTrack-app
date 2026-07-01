import { Pressable, View, Text } from "react-native";
import { getStyles } from "../styles/SignInScreen";
import { useAppStyle } from "../hooks/useAppStyle";

export type ButtonProps = {
  handleSubmit: () => void;
};

export default function Button({ handleSubmit }: ButtonProps) {
  const { styles } = useAppStyle(getStyles);
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
}

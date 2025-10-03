import { Pressable, View, Text } from "react-native";
import { styles } from "../styles/SignInScreen";

export type ButtonProps = {
  handleSubmit: () => void;
};

export default function Button({ handleSubmit }: ButtonProps) {
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

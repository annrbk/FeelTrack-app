import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { RouteProp } from "@react-navigation/native";

export default function TestScreen({
  route,
}: {
  route: RouteProp<RootStackParamList, "TestScreen">;
}) {
  return (
    <View>
      <Text>Test Screen</Text>
    </View>
  );
}

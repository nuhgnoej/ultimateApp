import { Button, Text, View } from "react-native";
import { useCounter } from "../contexts/CounterContext";

export default function HomeScreen({ navigation }) {
  const { count, increment } = useCounter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠 Home Screen</Text>
      <Text>현재 카운트: {count}</Text>
      <Button title="+" onPress={increment} />
      <Button
        title="글쓰기 화면으로 이동"
        onPress={() => navigation.navigate("Write")}
      />
    </View>
  );
}

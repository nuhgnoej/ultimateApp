import { View, Text } from "react-native";

export default function DetailScreen({ route }) {
  const { title, content } = route.params || {};
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {title ?? "No Title"}
      </Text>
      <Text style={{ marginTop: 10 }}>{content ?? "No Content Available"}</Text>
    </View>
  );
}

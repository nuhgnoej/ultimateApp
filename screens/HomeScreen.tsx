import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠 Home Screen</Text>
      {/* <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate("Detail", {
            title: "Ultimate React Native",
            content:
              "This is a course about becoming a true React Native master.",
          })
        }
      /> */}
      <Button
        title="글쓰기 화면으로 이동"
        onPress={() => navigation.navigate("Write")}
      />
    </View>
  );
}

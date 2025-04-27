import { View, TextInput, Button } from "react-native";

export default function WriteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="내용을 입력하세요"
        style={{ flex: 1, fontSize: 16 }}
        multiline
      />
      <Button title="저장" onPress={() => navigation.goBack()} />
    </View>
  );
}

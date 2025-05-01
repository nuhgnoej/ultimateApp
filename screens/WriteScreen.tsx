import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDiary } from "../contexts/DiaryContext";

export default function WriteScreen() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addDiary } = useDiary();
  const navigation = useNavigation();

  const onSave = () => {
    if (title.trim() === "" || body.trim() === "") {
      alert("제목과 내용을 모두 입력해 주세요!");
      return;
    }
    addDiary(title, body);
    navigation.navigate("Tabs", { screen: "Home" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>제목</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="제목을 입력하세요"
      />
      <Text style={styles.label}>내용</Text>
      <TextInput
        value={body}
        onChangeText={setBody}
        style={[styles.input, { height: 100 }]}
        placeholder="내용을 입력하세요"
        multiline
      />
      <Button title="저장하기" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 20,
  },
});

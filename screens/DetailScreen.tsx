import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDiary } from "../contexts/DiaryContext";

export default function DetailScreen() {
  const route = useRoute();
  const { id } = route.params as { id: number }; // ← route 파라미터로 전달된 id
  const { state: diaryList } = useDiary();

  const diary = diaryList.find((item) => item.id === id);

  if (!diary) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>❌ 해당 일기를 찾을 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{diary.title}</Text>
      <Text style={styles.date}>{new Date(diary.date).toLocaleString()}</Text>
      <Text style={styles.content}>{diary.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  notFound: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    lineHeight: 26,
  },
});

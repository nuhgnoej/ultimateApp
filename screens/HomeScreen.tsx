import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useDiary } from "../contexts/DiaryContext";

export default function HomeScreen({ navigation }) {
  const { logout } = useAuth();
  const { state: diaryList } = useDiary();

  const goToWrite = () => navigation.navigate("WriteScreen");
  const goToDetail = (id: number) => navigation.navigate("Detail", { id });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="로그아웃" onPress={logout} />
      <Button title="글쓰기 화면으로 이동" onPress={goToWrite} />

      <Text style={{ fontSize: 24, marginVertical: 20 }}>📘 내 일기들</Text>

      <FlatList
        data={diaryList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <View
              style={{
                marginBottom: 20,
                padding: 12,
                backgroundColor: "#f9f9f9",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ color: "#666", fontSize: 12 }}>
                {new Date(item.date).toLocaleString()}
              </Text>
              <Text style={{ marginTop: 8 }} numberOfLines={2}>
                {item.content}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={{ color: "#888", marginTop: 20 }}>
            아직 작성된 일기가 없어요.
          </Text>
        }
      />
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const handleButtonPress = () => {
    if (Platform.OS === 'web') {
      window.alert(`You typed: ${inputText || 'Nothing!'}`);
    } else {
      Alert.alert('You typed:', inputText || 'Nothing!');
    }    
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Ultimate App 🚀</Text>
      <TextInput
        style={styles.input}
        placeholder="Type Something here!"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Show Text" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
});

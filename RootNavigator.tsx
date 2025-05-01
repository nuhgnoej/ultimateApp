// RootNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "./contexts/AuthContext";
import LoginScreen from "./screens/LoginScreen";
import Tabs from "./Tabs";
import WriteScreen from "./screens/WriteScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isAuthenticated } = useAuth();
  console.log("로그인 여부:", isAuthenticated);

  return isAuthenticated ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="WriteScreen" component={WriteScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  ) : (
    <LoginScreen />
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WriteScreen from "./screens/WriteScreen";
import Tabs from "./Tabs";
import { AppProvider } from "./contexts";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Write"
            component={WriteScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}

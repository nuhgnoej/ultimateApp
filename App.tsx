// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { AppProviders } from "./contexts";
import RootNavigator from "./RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppProviders>
        <RootNavigator />
      </AppProviders>
    </NavigationContainer>
  );
}

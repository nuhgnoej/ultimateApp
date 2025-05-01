import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function getTabBarStyle(route) {
  const routeName = route.name;

  if (routeName === "Write") {
    return { display: "none" as const };
  }
  return {
    backgroundColor: "white",
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  };
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: getTabBarStyle(route),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

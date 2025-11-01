// tabs = navigation tabs from expo router
// ion icons / icon library for tab icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

// create main tab layout function
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff66c4", // your pink highlight color
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "star" : "star-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* About Tab */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle"
                  : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Log Mood Tab */}
      <Tabs.Screen
        name="log"
        options={{
          title: "Log Mood",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "happy" : "happy-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Chart Tab */}
      <Tabs.Screen
        name="chart"
        options={{
          title: "Chart",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "pie-chart" : "pie-chart-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}


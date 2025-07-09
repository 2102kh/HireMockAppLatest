
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const TabIcon = ({ name, color }: { name: string; color: string }) => (
  <MaterialIcons name={name as any} size={24} color={color} />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0A2463",
        tabBarStyle: {
          paddingBottom: 4,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hem",
          tabBarIcon: ({ color }) => <TabIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="interview"
        options={{
          title: "Intervju",
          tabBarIcon: ({ color }) => <TabIcon name="record-voice-over" color={color} />,
        }}
      />
     
      <Tabs.Screen
        name="history"
        options={{
          title: "Historik",
          tabBarIcon: ({ color }) => <TabIcon name="history" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <TabIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
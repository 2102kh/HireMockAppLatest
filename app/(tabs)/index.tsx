import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Välkommen till HireMock!</Text>
      <Text style={{ marginTop: 10 }}>Börja träna för din nästa intervju</Text>
    </View>
  );
}
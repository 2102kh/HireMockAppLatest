import { View, Text, StyleSheet } from "react-native";

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Historik kommer här 📈</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#0A2463",
  },
});

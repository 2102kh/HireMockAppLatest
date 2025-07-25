import { Text, View, StyleSheet } from "react-native";
import Button from '../components/buttons/Button'
import { MaterialIcons } from "@expo/vector-icons";
 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Välkommen till HireMock!</Text>
      <Text style={{ marginTop: 10 }}>Börja träna för din nästa intervju</Text>
     <Button>Starta intervju</Button>
     <Button 
     variant="secondary"
     icon={<MaterialIcons name="play-arrow" size={24} color="#0A2463" />}>Intervjuer</Button>
     <Button 
     variant="danger"
     isLoading={true}
    >Avsluta</Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
});
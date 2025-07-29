import { Text, View, StyleSheet } from "react-native";
import Button from '../components/buttons/Button'
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useInterview } from "@/hooks/useInterview";
 

export default function HomeScreen() {
  const router = useRouter();
  const {allInterviews} = useInterview();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Välkommen till HireMock!</Text>
      <Text style={{ marginTop: 10 }}>Börja träna för din nästa intervju</Text>
     
     <Button 
     variant="primary"
     icon={<MaterialIcons name="play-arrow" size={24} color="#f0f3faff" />}
     onPress={() => router.push('/interview')}>Starta intervju
     </Button>
      
    <Button 
     variant="secondary"
     //isLoading={true}
    >Senaste intervjuer</Button>

      <View style={styles.progressSection}>
        <Text style={styles.progressText}>Din framsteg</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${Math.min(allInterviews.length * 20 , 100)}%` }]} />
        </View>
        <Text style={styles.progressPercent}>{Math.min(allInterviews.length * 20 , 100)}% komplett</Text>
        <Text>Antal intervjuer: {allInterviews.length}</Text>
      </View>
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
   progressSection: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 30,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0A2463',
    borderRadius: 5,
  },
   progressPercent: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
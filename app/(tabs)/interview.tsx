
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Button from "../components/buttons/Button";
import { DIFFICULTY_LEVELS, JOB_TITLES, PROGRAMMING_LANGUAGES } from "@/constants/JobTitles";

export default function InterviewScreen() {
  const [jobTitle, setJobTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [language, setLanguage] = useState('');

  // För dropdown-picker
  const [jobTitleOpen, setJobTitleOpen] = useState(false);
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <><View style={styles.container}>
      <Text>Ny intervjuövning</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Jobbtitel:</Text>
        <DropDownPicker
          open={jobTitleOpen}
          value={jobTitle}
          items={JOB_TITLES}
          setOpen={setJobTitleOpen}
          setValue={setJobTitle}
          placeholder="Välj jobbtitel"
          style={styles.dropdown} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Språk:</Text>
        <DropDownPicker
          open={languageOpen}
          value={language}
          items={PROGRAMMING_LANGUAGES}
          setOpen={setLanguageOpen}
          setValue={setLanguage}
          placeholder="Välj språk"
          style={styles.dropdown} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Svårighetsgrad:</Text>
        <DropDownPicker
          open={difficultyOpen}
          value={difficulty}
          items={DIFFICULTY_LEVELS}
          setValue={setDifficulty}
          setOpen={setDifficultyOpen}
          placeholder="Välj svårighet"
          style={styles.dropdown} />
      </View>
    </View>
      <Button
        variant="primary"
        onPress={() => {
          alert('Du valde :\n' +
            `Jobbtitel: ${jobTitle}\n` +
            `Språk: ${language}\n` +
            `Svårighetsgrad: ${difficulty}`);
        }}
      >Starta övning</Button></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    gap: 45,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
    borderBottomColor: '#0A2463',

  },
  dropdown: {
    width: '100%',
    marginTop: 10,
    zIndex: 1,
    borderColor: '#0A2463',
  },
  text: {
    fontSize: 16,
    color: '#0A2463',
  },
  label: {
    fontSize: 16,
    color: '#0A2463',
  },
});
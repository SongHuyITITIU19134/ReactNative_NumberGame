import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constant/Color";

function GameStartScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandle() {
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid number",
        "The number must be a number between 0 and 99",
        [{ text: " Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chooseNumber);
  }

  return (
    <View style={styles.contain}>
      <Title>Guess My Number</Title>
      <View style={styles.textArea}>
        <TextInput
          placeholder="00"
          maxLength={2}
          style={styles.textInput}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonProperties}>
          <PrimaryButton onPress={resetInputHandler}>Rest</PrimaryButton>
        </View>
        <View style={styles.buttonProperties}>
          <PrimaryButton onPress={confirmInputHandle}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameStartScreen;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  contain: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 36,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    opacity: 0.85,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonProperties: {},
  textArea: {
    padding: 30,
  },
  textInput: {
    color: Color.accent500,
    fontSize: 40,
    fontWeight: "bold",
    borderBottomWidth: 3,

    borderBottomColor: Color.accent500,
  },
});

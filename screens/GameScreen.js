import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import IntructionText from "../components/IntructionText";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constant/Color";

function generateRandomBetween(min, max, exclude) {
  const rndNumber = Math.floor(Math.random() * (max - min) + min);

  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!!", "You know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    
    <View style={styles.contain}>
      <Title>Oppent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <IntructionText style={styles.instructionText}>
          Higher or Lower ?
        </IntructionText>
        <View style={styles.buttonContain}>
          <View style={styles.buttonProperties}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minuscircle" size={24} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonProperties}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </View>

      <View>{/* <Text> LOG ROUND</Text> */}</View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  contain: {
    padding: 24,
    flex: 1,
    color: "#FFFFFF",
   
  },
  instructionText: {
    marginBottom: 18,
  },
  buttonContain: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonProperties: {
    padding: 5,
  },
});

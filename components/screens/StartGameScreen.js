import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../PrimaryButton";

export default function StartGameScreen() {
  const [numberInput, setNumberInput] = useState("");
  function inputHandler(input) {
    setNumberInput(input);
  }
  function resetInput() {
    setNumberInput("");
  }

  function confirmInput(input) {
    const chosenNumber = parseInt(input);
    console.log(chosenNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        maxLength={2}
        keyboardType="number-pad"
        value={numberInput}
        onChangeText={inputHandler}
      />
      <View style={styles.containerButtons}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={() => confirmInput(numberInput)}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 16,
    width: 350,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 30,
    hight: 30,
    width: 50,
    textAlign: "center",
    color: "#ddb52f",
    borderBottomWidth: 2,
    borderColor: "#ddb52f",
  },
  containerButtons: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
  },
});

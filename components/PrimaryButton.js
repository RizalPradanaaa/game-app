import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={styles.textInput}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#4e0329",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 0.4,
    elevation: 4,
  },
});

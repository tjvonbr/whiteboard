import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ColorButtonProps = {
  buttonText: string;
  handlePress: () => void;
  backgroundColor: string;
  color: string;
};

const ColoredButton = ({
  buttonText,
  handlePress,
  backgroundColor,
  color,
}: ColorButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={handlePress}>
      <Text style={[styles.text, { color }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontWeight: "600",
    fontSize: 15,
    padding: 10,
  },
});

export default ColoredButton;

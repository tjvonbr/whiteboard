import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../styles/colors";

const QuickSelectButton = ({ period, selectedPeriod }) => {
  const isSelected = () => period == selectedPeriod;

  return (
    <TouchableOpacity
      style={[
        styles.quickSelectButton,
        isSelected() ? styles.selectedBtn : null,
      ]}
      onPress={() => console.log("Hello")}>
      <Text
        style={[
          styles.quickSelectText,
          isSelected() ? styles.selectedText : null,
        ]}>
        {period}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  quickSelectButton: {
    width: 75,
    height: 40,
    borderWidth: 0.5,
    borderColor: "black",
    shadowColor: "lightgray",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  selectedBtn: {
    borderWidth: 0.5,
    backgroundColor: "black",
  },
  quickSelectText: {
    fontWeight: "700",
    fontSize: 15,
    color: "black",
  },
  selectedText: {
    color: colors.white,
  },
});

export default QuickSelectButton;

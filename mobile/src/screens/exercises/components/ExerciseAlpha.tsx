import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../styles/colors";

const ExerciseAlpha = ({ alpha, index, handleScroll }) => {
  return (
    <TouchableOpacity
      style={styles.alphaBtn}
      onPress={() => handleScroll(index)}>
      <Text style={styles.alphaBtnText}>{alpha}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  alphaBtn: {
    width: "100%",
    paddingVertical: 2,
  },
  alphaBtnText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.black,
  },
});

export default ExerciseAlpha;

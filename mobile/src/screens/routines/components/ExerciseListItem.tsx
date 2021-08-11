import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/colors";

const ExerciseListItem = exercise => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.exercise.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: "100%",
    marginVertical: 2,
  },
  name: {
    fontWeight: "600",
    color: colors.black,
  },
});

export default ExerciseListItem;

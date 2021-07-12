import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./AddWorkoutStyles";

const SubmitWorkout = ({ route }) => {
  const {
    name,
    description,
    timeLimit,
    workoutDropdownValue,
    scoreDropdownValue,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubmitWorkout;

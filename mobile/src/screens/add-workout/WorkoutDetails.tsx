import * as React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import styles from "./AddWorkoutStyles";

const WorkoutDetails = ({ route }) => {
  const { name, description, time, type, score } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Workout Details</Text>
    </SafeAreaView>
  );
};

export default WorkoutDetails;

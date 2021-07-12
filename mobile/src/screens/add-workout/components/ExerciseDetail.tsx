import * as React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../AddWorkoutStyles";

const ExerciseDetail = ({ name }) => {
  const [weight, setWeight] = React.useState(null);
  const [reps, setReps] = React.useState(null);

  return (
    <View style={styles.exerciseInputContainer}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
        <Text>{name}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}>
        <TextInput
          style={styles.exerciseInput}
          value={weight}
          placeholder="lbs."
          onChangeText={(weight: string) => setWeight(weight)}
          keyboardType="number-pad"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}>
        <TextInput
          style={styles.exerciseInput}
          value={reps}
          placeholder="Reps"
          onChangeText={(reps: string) => setReps(reps)}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default ExerciseDetail;

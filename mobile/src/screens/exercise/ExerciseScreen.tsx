import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./ExerciseStyles";

const ExerciseScreen = ({ navigation, route }) => {
  const exercise = route.params.data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: exercise.name,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Exercise Screen</Text>
    </SafeAreaView>
  );
};

export default ExerciseScreen;

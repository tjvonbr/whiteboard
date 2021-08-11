import * as React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import EditExerciseModal from "../exercises/components/EditExerciseModal";
import styles from "./ExerciseStyles";

const ExerciseScreen = ({ navigation, route }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const exercise = route.params.data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: exercise.name,
      headerRight: () => (
        <Button title="Edit" onPress={() => setIsVisible(true)} />
      ),
    });
  }, [navigation]);

  const hideModal = () => setIsVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Exercise Screen</Text>
      <EditExerciseModal
        exercise={exercise}
        isVisible={isVisible}
        hideModal={hideModal}
      />
    </SafeAreaView>
  );
};

export default ExerciseScreen;

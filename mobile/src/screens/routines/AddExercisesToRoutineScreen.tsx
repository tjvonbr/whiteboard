import * as React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import ExercisePicker from "../../components/modals/ExercisePicker";
import CustomButton from "../../components/buttons/CustomButton";
import { colors } from "../../styles/colors";
import styles from "./RoutinesStyles";
import { addRoutineExercises } from "./RoutinesRequests";

const AddExercisesToRoutineScreen = ({ navigation, route }) => {
  const [exercises, setExercises] = React.useState([]);
  const [selected, setSelected] = React.useState(new Map());
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const { routineId, routineName } = route.params;

  // // Handle selection of exercises in modal
  const handleSelect = React.useCallback(
    item => {
      const newSelected = new Map(selected);
      newSelected.set(item.id, !selected.get(item.id));
      setSelected(newSelected);

      if (exercises.includes(item)) {
        const filtered = exercises.filter(e => e.id != item.id);
        setExercises(filtered);
      } else {
        setExercises([...exercises, item]);
      }
    },
    [selected],
  );

  const renderExercise = ({ item }) => {
    return <Text key={item.id}>{item.name}</Text>;
  };

  const submitExercises = async () => {
    setIsLoading(true);

    const routineExercises = [];

    exercises.forEach(exercise => {
      routineExercises.push({
        routineId,
        exerciseId: exercise.id,
      });
    });

    try {
      const newRoutineExercise = await addRoutineExercises(routineExercises);
      navigation.navigate("Routine", {
        routineName,
      });
      return;
    } catch (error) {
      console.log(error.errors);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={exercises}
          renderItem={renderExercise}
          keyExtractor={item => item.id}
        />
        <View style={styles.btnContainer}>
          <CustomButton
            backgroundColor={colors.white}
            btnText={"Add exercises"}
            color={colors.blue09}
            handlePress={() => setIsVisible(true)}
            width={"100%"}
          />
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={"Save routine"}
            color={colors.white}
            handlePress={submitExercises}
            width={"100%"}
            isLoading={isLoading}
          />
        </View>
      </View>
      <ExercisePicker
        isVisible={isVisible}
        closeModal={() => setIsVisible(false)}
        selected={selected}
        handleSelect={handleSelect}
      />
    </SafeAreaView>
  );
};

export default AddExercisesToRoutineScreen;

import * as React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import ExercisePicker from "../../components/modals/ExercisePicker";
import CustomButton from "../../components/buttons/CustomButton";
import { colors } from "../../styles/colors";
import styles from "./RoutinesStyles";
import { ConsoleLogger } from "@aws-amplify/core";
import { addRoutineExercise } from "./RoutinesRequests";

const AddExercisesToRoutineScreen = ({ navigation, route }) => {
  const [exercises, setExercises] = React.useState([]);
  const [selected, setSelected] = React.useState(new Map());
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const { routineId } = route.params;

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
    return <Text>{item.name}</Text>;
  };

  const submitExercises = async () => {
    setIsLoading(true);

    try {
      exercises.forEach(exercise => {
        let ids = {
          routineId,
          exerciseId: exercise.id,
        };

        await addRoutineExercise(ids);
      });
    } catch (error) {
      console.log(error);
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
            handlePress={() => console.log("Submitted!")}
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

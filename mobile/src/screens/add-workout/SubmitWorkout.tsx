import * as React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ExerciseDetail from "./components/ExerciseDetail";
import ExercisePicker from "../../components/modals/ExercisePicker";
import AddExerciseButton from "../../components/buttons/AddExerciseButton";
import styles from "./AddWorkoutStyles";

const SubmitWorkout = ({ route }) => {
  const [selected, setSelected] = React.useState(new Map());
  const [exercises, setExercises] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  const { name } = route.params;

  // Handle selection of exercises in modal
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

  const toggleModal = () => setIsVisible(!isVisible);

  const renderItem = ({ item }) => <ExerciseDetail name={item.name} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.section}>
          <View style={styles.addExerciseContainer}>
            <Text style={styles.subtitle}>Exercises</Text>
          </View>
          <FlatList
            data={exercises}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSecondary} onPress={toggleModal}>
            <Text style={styles.btnTextSecondary}>Add exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnTextPrimary}>Create workout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ExercisePicker
        isVisible={isVisible}
        closeModal={toggleModal}
        selected={selected}
        handleSelect={handleSelect}
      />
    </SafeAreaView>
  );
};

export default SubmitWorkout;

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
import styles from "./AddWorkoutStyles";

const SubmitWorkoutScreen = ({ route }) => {
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
        <View style={styles.addExerciseContainer}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 70 }}
            data={exercises}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.btnPrimary,
            { position: "absolute", bottom: 5, marginBottom: 10 },
          ]}
          onPress={toggleModal}>
          <Text style={styles.btnTextPrimary}>Add Exercise</Text>
        </TouchableOpacity>
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

export default SubmitWorkoutScreen;

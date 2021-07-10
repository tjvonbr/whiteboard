import * as React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ExercisePicker from "../../components/modals/ExercisePicker";
import { format } from "date-fns";
import styles from "./AddWorkoutStyles";

const Dashboard = () => {
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );

  const [description, setDescription] = React.useState("");
  const [exercises, setExercises] = React.useState(new Array());
  const [selected, setSelected] = React.useState(new Map());
  const [isVisible, setIsVisible] = React.useState(false);

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

  const handleName = (name: string) => setName(name);
  const handleDescription = (text: string) => setDescription(text);

  const openModal = () => setIsVisible(true);
  const closeModal = () => {
    setIsVisible(false);
  };

  console.log(exercises);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.title}
          value={name}
          onChangeText={handleName}
        />
        <View style={styles.section}>
          <Text style={styles.subtitle}>Description</Text>
          <TextInput
            style={styles.description}
            value={description}
            onChangeText={handleDescription}
            placeholder={"Enter a description (optional)"}
            multiline={true}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Exercises</Text>
          <FlatList
            data={exercises}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={item => item.id.toString()}
          />
          <TouchableOpacity style={styles.btnPrimary} onPress={openModal}>
            <Text style={styles.btnTextPrimary}>Add Exercise</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ExercisePicker
        isVisible={isVisible}
        closeModal={closeModal}
        selected={selected}
        handleSelect={handleSelect}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

import * as React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ExercisePicker from "../../components/modals/ExercisePicker";
import { format } from "date-fns";
import styles from "./AddWorkoutStyles";
import { colors } from "../../styles/colors";

const Dashboard = () => {
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );
  const [description, setDescription] = React.useState("");
  const [exercises, setExercises] = React.useState(new Array());
  const [selected, setSelected] = React.useState(new Map());
  const [scoringStyles, setScoringStyles] = React.useState([
    { value: "Rounds + Reps", label: "Rounds + Reps" },
    { value: "Rounds", label: "Rounds" },
  ]);
  const [dropdownValue, setDropdownValue] = React.useState(null);
  const [isDropdownOpen, setDropdownIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

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

  // Clear current selection and close modal
  const clearAndClose = () => {
    setExercises([]);
    setSelected(new Map());
    toggleModal();
  };

  // Handle user input
  const handleName = (name: string) => setName(name);
  const handleDescription = (text: string) => setDescription(text);

  // Toggle modal
  const toggleModal = () => setIsVisible(!isVisible);

  // Toggle dropdown
  const togglePicker = () => setDropdownIsOpen(!isDropdownOpen);

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
        <View style={[styles.section, { zIndex: 10 }]}>
          <Text style={styles.subtitle}>Scoring Style</Text>
          <DropDownPicker
            style={{ borderColor: colors.inputBorderGray, zIndex: 10 }}
            items={scoringStyles}
            value={dropdownValue}
            setValue={setDropdownValue}
            open={isDropdownOpen}
            setOpen={togglePicker}
            placeholder="Select a scoring style"
            zIndex={1000}
            containerStyle={{
              zIndex: 10,
            }}
            dropDownContainerStyle={{
              backgroundColor: colors.white,
              borderColor: colors.inputBorderGray,
            }}
          />
        </View>
        <View style={[styles.section, { zIndex: 1 }]}>
          <Text style={styles.subtitle}>Exercises</Text>
          <FlatList
            data={exercises}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={item => item.id.toString()}
          />
          {/* <TouchableOpacity style={styles.btnPrimary} onPress={toggleModal}>
            <Text style={styles.btnTextPrimary}>Add Exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() =>
              navigation.navigate("Details", {
                exercises,
              })
            }>
            <Text style={styles.btnTextPrimary}>Continue</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <ExercisePicker
        isVisible={isVisible}
        toggleModal={toggleModal}
        clearAndClose={clearAndClose}
        selected={selected}
        handleSelect={handleSelect}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

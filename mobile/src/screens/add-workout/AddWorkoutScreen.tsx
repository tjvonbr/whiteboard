import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import BackButton from "../../components/buttons/BackButton";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import NavigationBar from "../../components/navigation/NavigationBar";
import RoutinePicker from "../../components/modals/RoutinePicker";
import { addWorkout } from "../add-workout/AddWorkoutRequests";
import { useAuth } from "../../context/auth";
import { format, parseISO } from "date-fns";
import styles from "./AddWorkoutStyles";
import { colors } from "../../styles/colors";
import DropdownButton from "../../components/buttons/DropdownButton";

const AddWorkoutScreen = ({ navigation, route }) => {
  const [routine, setRoutine] = React.useState(null);
  const [notes, setNotes] = React.useState(null);
  const [score, setScore] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  let date = null;

  if (route.params) {
    date = format(parseISO(route.params.date), "");
  }

  const {
    user: { userId },
  } = useAuth();

  const selectRoutine = routine => {
    setRoutine(routine);
  };

  const createWorkout = async () => {
    const workoutDetails = {
      userId,
      routineId: routine.id,
      name,
      notes,
      score,
    };

    setIsLoading(true);

    const newExercise = await addWorkout(workoutDetails);

    if (newExercise) {
      navigation.navigate("Dashboard");
      setIsLoading(false);
    }
  };

  const handleDescription = (text: string) => setNotes(text);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar leftHeader={<BackButton navigation={navigation} />} />
      <View style={styles.innerContainer}>
        {date ? (
          <Text style={styles.header}>{`Add Workout for ${format(
            parseISO(date),
            "cccc, LLLL dd, yyyy",
          )}`}</Text>
        ) : (
          <Text style={styles.header}>Add Workout</Text>
        )}
        <Text style={styles.subheader}>
          Select a workout template and add your score! Feel free to leave a
          note too.
        </Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Workout</Text>
          <DropdownButton
            text={routine ? `${routine.name}` : "Select a workout"}
            handlePress={() => setIsVisible(true)}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Notes</Text>
          <CustomInput
            style={styles.notes}
            value={notes}
            onChangeText={handleDescription}
            placeholder="Enter some notes (optional)"
            multiline={true}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Score</Text>
          <CustomInput
            style={styles.registerInput}
            value={score}
            onChangeText={score => setScore(score)}
            placeholder="Enter your score"
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            backgroundColor={"#4d4dff"}
            btnText={"Create workout"}
            color={colors.white}
            handlePress={createWorkout}
            width={"100%"}
            isLoading={isLoading}
          />
        </View>
      </View>
      <RoutinePicker
        isVisible={isVisible}
        closeModal={() => setIsVisible(false)}
        selected={routine}
        selectRoutine={selectRoutine}
      />
    </SafeAreaView>
  );
};

export default AddWorkoutScreen;

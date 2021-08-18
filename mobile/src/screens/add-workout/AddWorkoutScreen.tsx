import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import RoutinePicker from "../../components/modals/RoutinePicker";
import { addWorkout } from "../add-workout/AddWorkoutRequests";
import { useAuth } from "../../context/auth";
import { format } from "date-fns";
import styles from "./AddWorkoutStyles";
import { colors } from "../../styles/colors";
import DropdownButton from "../../components/buttons/DropdownButton";

const Dashboard = ({ navigation }) => {
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );
  const [notes, setNotes] = React.useState(null);
  const [routine, setRoutine] = React.useState(null);
  const [score, setScore] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

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

    const newExercise = await addWorkout(workoutDetails);

    if (newExercise) {
      navigation.navigate("Dashboard");
    }
  };

  // Handle user input
  const handleName = (name: string) => setName(name);
  const handleDescription = (text: string) => setNotes(text);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomInput
          style={styles.title}
          value={name}
          onChangeText={handleName}
        />
        <View style={styles.section}>
          <DropdownButton
            text={routine ? `Routine: ${routine.name}` : "Select a routine"}
            handlePress={() => setIsVisible(true)}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Notes</Text>
          <CustomInput
            style={styles.description}
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
            backgroundColor={colors.blue09}
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

export default Dashboard;

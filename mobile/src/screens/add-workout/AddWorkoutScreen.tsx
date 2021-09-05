import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import AddNotesModal from "../../components/modals/AddNotesModal";
import AddNotesModalButton from "../../components/modals/AddNotesModalButton";
import BackButton from "../../components/buttons/BackButton";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import NavigationBar from "../../components/navigation/NavigationBar";
import RoutinePicker from "../../components/modals/RoutinePicker";
import { addWorkout } from "../add-workout/AddWorkoutRequests";
import { useAuth } from "../../context/auth";
import styles from "./AddWorkoutStyles";
import { colors } from "../../styles/colors";
import DropdownButton from "../../components/buttons/DropdownButton";

const AddWorkoutScreen = ({ navigation, route }) => {
  const [routine, setRoutine] = useState(null);
  const [notes, setNotes] = useState(null);
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddNotesVisible, setIsAddNotesVisible] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

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
        {route.params.date ? (
          <Text
            style={
              styles.header
            }>{`Add Workout for ${route.params.date}`}</Text>
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
            handlePress={() => setIsPickerVisible(true)}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Notes</Text>
          <AddNotesModalButton
            buttonStyles={styles.registerInput}
            text={notes}
            showModal={() => setIsAddNotesVisible(true)}
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
            backgroundColor={colors.primaryPurple}
            btnText={"Create workout"}
            color={colors.white}
            handlePress={createWorkout}
            width={"100%"}
            isLoading={isLoading}
          />
        </View>
      </View>
      <RoutinePicker
        isVisible={isPickerVisible}
        closeModal={() => setIsPickerVisible(false)}
        selected={routine}
        selectRoutine={selectRoutine}
      />
      <AddNotesModal
        isVisible={isAddNotesVisible}
        hideModal={() => setIsAddNotesVisible(false)}
      />
    </SafeAreaView>
  );
};

export default AddWorkoutScreen;

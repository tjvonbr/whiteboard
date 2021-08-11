import * as React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import ExerciseListItem from "./components/ExerciseListItem";
import ExercisePicker from "../../components/modals/ExercisePicker";
import DropDownPicker from "react-native-dropdown-picker";
import { useAuth } from "../../context/auth";
import { format } from "date-fns";
import { addRoutine } from "./RoutinesRequests";
import styles from "./RoutinesStyles";
import { colors } from "../../styles/colors";

const AddRoutineScreen = ({ navigation }) => {
  const {
    user: { userId },
  } = useAuth();

  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );
  const [description, setDescription] = React.useState(null);
  const [timeLimit, setTimeLimit] = React.useState(null);
  const [selected, setSelected] = React.useState(new Map());
  const [exercises, setExercises] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);
  const [workoutTypes, setWorkoutTypes] = React.useState([
    { value: "AMRAP", label: "AMRAP" },
    { value: "EMOM", label: "EMOM" },
    { value: "Traditional", label: "Traditional" },
  ]);
  const [scoringStyles, setScoringStyles] = React.useState([
    { value: "Rounds", label: "Rounds" },
    { value: "Reps", label: "Reps" },
    { value: "Rounds + Reps", label: "Rounds + Reps" },
    { value: "Weight", label: "Weight" },
    { value: "Time", label: "Time" },
  ]);
  const [scoreDropdownValue, setScoreDropdownValue] = React.useState(null);
  const [workoutDropdownValue, setWorkoutDropdownValue] = React.useState(null);
  const [isScoreDropdownOpen, setIsScoreDropdownOpen] = React.useState(false);
  const [isWorkoutDropdownOpen, setIsWorkoutDropdownOpen] = React.useState(
    false,
  );

  const handleScoreOpen = () => {
    setIsWorkoutDropdownOpen(false);
    setIsScoreDropdownOpen(!isScoreDropdownOpen);
  };

  const handleWorkoutOpen = () => {
    setIsScoreDropdownOpen(false);
    setIsWorkoutDropdownOpen(!isWorkoutDropdownOpen);
  };

  const incrementStep = () => setStep(step + 1);
  const decrementStep = () => setStep(step - 1);

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

  const renderExercise = ({ item }) => {
    return <ExerciseListItem exercise={item} />;
  };

  const submitRoutine = async () => {
    const routineDetails = {
      userId,
      name,
      description,
      workoutDropdownValue,
      scoreDropdownValue,
      exercises,
    };
    const newRoutine = await addRoutine(routineDetails);

    console.log(newRoutine);
    return newRoutine;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <View style={styles.section}>
              <CustomInput
                style={styles.title}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.inputTitle}>Routine description</Text>
              <CustomInput
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder={"Enter a description (optional)"}
                style={[styles.input, { height: 100, paddingTop: 10 }]}
                multiline={true}
                returnKeyType="done"
              />
            </View>
            <View style={[styles.section, { zIndex: 20 }]}>
              <Text style={styles.inputTitle}>Routine Type</Text>
              <DropDownPicker
                style={{ borderColor: colors.inputBorderGray }}
                items={workoutTypes}
                value={workoutDropdownValue}
                setValue={setWorkoutDropdownValue}
                open={isWorkoutDropdownOpen}
                setOpen={handleWorkoutOpen}
                dropDownContainerStyle={{
                  backgroundColor: colors.white,
                  borderColor: colors.inputBorderGray,
                }}
              />
            </View>
            {renderAdditionalInput()}
            <View style={[styles.section, { zIndex: 10 }]}>
              <Text style={styles.inputTitle}>Scoring Type</Text>
              <DropDownPicker
                style={{ borderColor: colors.inputBorderGray }}
                items={scoringStyles}
                value={scoreDropdownValue}
                setValue={setScoreDropdownValue}
                open={isScoreDropdownOpen}
                setOpen={handleScoreOpen}
                dropDownContainerStyle={{
                  backgroundColor: colors.white,
                  borderColor: colors.inputBorderGray,
                }}
              />
            </View>
          </>
        );
      case 2:
        return (
          <View style={styles.section}>
            <Text style={styles.title}>Exercises</Text>
            <FlatList
              data={exercises}
              renderItem={renderExercise}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        );
    }
  };

  const renderAdditionalInput = () => {
    switch (workoutDropdownValue) {
      case "AMRAP":
        return (
          <View style={styles.section}>
            <Text style={styles.inputTitle}>Time Limit</Text>
            <CustomInput
              style={styles.input}
              value={timeLimit}
              onChangeText={limit => setTimeLimit(limit)}
              placeholder="Enter a time limit (in minutes)"
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
        );
      case "EMOM":
        return (
          <View style={styles.section}>
            <Text style={styles.inputTitle}>Minute Interval</Text>
            <CustomInput
              style={styles.input}
              value={timeLimit}
              onChangeText={limit => setTimeLimit(limit)}
              placeholder="Enter a time interval (minute)"
              keyboardType="number-pad"
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {renderStep()}
        <View style={styles.btnContainer}>
          {step === 2 ? (
            <CustomButton
              backgroundColor={colors.white}
              btnText={"Add exercises"}
              color={colors.blue09}
              handlePress={() => setIsVisible(true)}
              width={"100%"}
            />
          ) : null}
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={step === 1 ? "Continue" : "Create routine"}
            color={colors.white}
            handlePress={step === 1 ? incrementStep : submitRoutine}
            width={"100%"}
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

export default AddRoutineScreen;

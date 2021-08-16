import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import DropDownPicker from "react-native-dropdown-picker";
import { WorkoutType, ScoringType } from "../../API";
import { useAuth } from "../../context/auth";
import { format } from "date-fns";
import { addRoutine } from "./RoutinesRequests";
import styles from "./RoutinesStyles";
import { colors } from "../../styles/colors";

const AddRoutineScreen = ({ navigation }) => {
  const {
    user: { userId },
  } = useAuth();

  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );
  const [description, setDescription] = React.useState(null);
  const [timeLimit, setTimeLimit] = React.useState(null);
  const [exercises, setExercises] = React.useState([]);
  const [workoutTypes, setWorkoutTypes] = React.useState([
    { value: WorkoutType.AMRAP, label: "AMRAP" },
    { value: WorkoutType.EMOM, label: "EMOM" },
    { value: WorkoutType.RFT, label: "RFT" },
    { value: WorkoutType.STRENGTH, label: "Traditional" },
  ]);
  const [scoringStyles, setScoringStyles] = React.useState([
    { value: ScoringType.ROUNDS, label: "Rounds" },
    { value: ScoringType.ROUNDS_PLUS_REPS, label: "Rounds + Reps" },
    { value: ScoringType.WEIGHT, label: "Weight" },
    { value: ScoringType.TIME, label: "Time" },
  ]);
  const [scoringType, setScoringType] = React.useState(null);
  const [workoutType, setWorkoutType] = React.useState(null);
  const [isScoreDropdownOpen, setIsScoreDropdownOpen] = React.useState(false);
  const [isWorkoutDropdownOpen, setIsWorkoutDropdownOpen] = React.useState(
    false,
  );
  const [isLoading, setIsLoading] = React.useState(false);

  const handleScoreOpen = () => {
    setIsWorkoutDropdownOpen(false);
    setIsScoreDropdownOpen(!isScoreDropdownOpen);
  };

  const handleWorkoutOpen = () => {
    setIsScoreDropdownOpen(false);
    setIsWorkoutDropdownOpen(!isWorkoutDropdownOpen);
  };

  const submitRoutine = async () => {
    setIsLoading(true);

    const routineDetails = {
      userId,
      name,
      description,
      workoutType,
      scoringType,
    };

    const newRoutine: any = await addRoutine(routineDetails);

    navigation.navigate("AddExercises", {
      routineId: newRoutine.data.id,
    });
    setIsLoading(false);
    return newRoutine;
  };

  const renderAdditionalInput = () => {
    switch (workoutType) {
      case WorkoutType.AMRAP:
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
      case WorkoutType.EMOM:
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
            value={workoutType}
            setValue={setWorkoutType}
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
            value={scoringType}
            setValue={setScoringType}
            open={isScoreDropdownOpen}
            setOpen={handleScoreOpen}
            dropDownContainerStyle={{
              backgroundColor: colors.white,
              borderColor: colors.inputBorderGray,
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={"Create routine"}
            color={colors.white}
            handlePress={submitRoutine}
            width={"100%"}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddRoutineScreen;

import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { format } from "date-fns";
import styles from "./AddWorkoutStyles";
import { colors } from "../../styles/colors";

const Dashboard = ({ navigation }) => {
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );
  const [description, setDescription] = React.useState("");
  const [timeLimit, setTimeLimit] = React.useState(null);
  const [workoutTypes, setWorkoutTypes] = React.useState([
    { value: "Time limit", label: "Time limit" },
    { value: "EMOM", label: "EMOM" },
    { value: "Traditional", label: "Traditional" },
  ]);
  const [scoringStyles, setScoringStyles] = React.useState([
    { value: "Rounds + Reps", label: "Rounds + Reps" },
    { value: "Rounds", label: "Rounds" },
  ]);
  const [workoutDropdownValue, setWorkoutDropdownValue] = React.useState(null);
  const [scoreDropdownValue, setScoreDropdownValue] = React.useState(null);
  const [isWorkoutDropdownOpen, setIsWorkoutDropdownOpen] =
    React.useState(false);
  const [isScoreDropdownOpen, setIsScoreDropdownOpen] = React.useState(false);

  const renderTimeInput = () => {
    switch (workoutDropdownValue) {
      case "Time limit":
        return (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Time Limit</Text>
            <TextInput
              style={styles.timeLimitInput}
              value={timeLimit}
              onChangeText={handleTimeLimit}
              placeholder={"Enter a time limit (in minutes)"}
              keyboardType="number-pad"
            />
          </View>
        );
      case "EMOM":
        return (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Minute Interval</Text>
            <TextInput
              style={styles.timeLimitInput}
              value={timeLimit}
              onChangeText={handleTimeLimit}
              placeholder={"Enter a time interval (minute)"}
              keyboardType="number-pad"
            />
          </View>
        );
      default:
        return null;
    }
  };

  // Handle user input
  const handleName = (name: string) => setName(name);
  const handleDescription = (text: string) => setDescription(text);
  const handleTimeLimit = (limit: string) => setTimeLimit(limit);

  // Toggle dropdowns
  const handleScoreOpen = () => {
    setIsWorkoutDropdownOpen(false);
    setIsScoreDropdownOpen(!isScoreDropdownOpen);
  };
  const handleWorkoutOpen = () => {
    setIsScoreDropdownOpen(false);
    setIsWorkoutDropdownOpen(!isWorkoutDropdownOpen);
  };

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
        <View style={[styles.section, { zIndex: 20 }]}>
          <Text style={styles.subtitle}>Workout Type</Text>
          <DropDownPicker
            style={{ borderColor: colors.inputBorderGray }}
            items={workoutTypes}
            value={workoutDropdownValue}
            setValue={setWorkoutDropdownValue}
            open={isWorkoutDropdownOpen}
            setOpen={handleWorkoutOpen}
            placeholder="Select a workout type"
            dropDownContainerStyle={{
              backgroundColor: colors.white,
              borderColor: colors.inputBorderGray,
            }}
          />
        </View>
        {renderTimeInput()}
        <View style={[styles.section, { zIndex: 10 }]}>
          <Text style={styles.subtitle}>Scoring Style</Text>
          <DropDownPicker
            style={{ borderColor: colors.inputBorderGray }}
            items={scoringStyles}
            value={scoreDropdownValue}
            setValue={setScoreDropdownValue}
            open={isScoreDropdownOpen}
            setOpen={handleScoreOpen}
            placeholder="Select a scoring style"
            dropDownContainerStyle={{
              backgroundColor: colors.white,
              borderColor: colors.inputBorderGray,
            }}
          />
        </View>
      </View>
      <View style={[styles.btnContainer, { width: "90%" }]}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() =>
            navigation.navigate("SubmitWorkout", {
              name,
              description,
              time: timeLimit,
              type: workoutDropdownValue,
              score: scoreDropdownValue,
            })
          }>
          <Text style={styles.btnTextPrimary}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

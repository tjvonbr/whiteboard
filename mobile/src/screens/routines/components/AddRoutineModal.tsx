import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../../../components/buttons/CustomButton";
import CustomInput from "../../../components/CustomInput";
import DropDownPicker from "react-native-dropdown-picker";
import Modal from "react-native-modal";
import { colors } from "../../../styles/colors";

const AddRoutineModal = ({ isVisible, hideModal }) => {
  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [workoutTypes, setWorkoutTypes] = React.useState([
    { value: "AMRAP", label: "AMRAP" },
    { value: "EMOM", label: "EMOM" },
    { value: "Max", label: "Max" },
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

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={hideModal}>
      <SafeAreaView style={styles.modalView}>
        <View style={styles.modalHandle} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.contentContainer}>
          <View>
            <Text style={styles.headerTitle}>Add Routine</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Routine name</Text>
              <CustomInput
                value={name}
                onChangeText={name => setName(name)}
                style={styles.input}
                returnKeyType="done"
              />
              <Text style={styles.inputTitle}>Routine description</Text>
              <CustomInput
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder={"Enter a description (optional)"}
                style={[styles.input, { height: 100, paddingTop: 10 }]}
                multiline={true}
                returnKeyType="done"
              />
              <Text style={styles.inputTitle}>Routine Type</Text>
              <View style={[styles.section, { zIndex: 20 }]}>
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
            </View>
          </View>
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={"Done"}
            color={colors.white}
            handlePress={() => console.log("Pressed!")}
            width={"100%"}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 0.95,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    flex: 0.9,
    width: "90%",
    justifyContent: "space-between",
  },
  modalHandle: {
    width: 50,
    height: 5,
    position: "absolute",
    top: 10,
    alignSelf: "center",
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  inputContainer: {
    width: "100%",
  },
  inputTitle: {
    color: "#4F4F4F",
    fontWeight: "600",
    marginBottom: 5,
    paddingLeft: 5,
  },
  section: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    color: colors.black,
    fontSize: 15,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 7,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 20,
  },
});

export default AddRoutineModal;

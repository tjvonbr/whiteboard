import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { addExercise } from "../ExerciseRequests";
import Button from "../../../components/buttons/Button";
import CustomInput from "../../../components/CustomInput";
import Modal from "react-native-modal";
import { useAuth } from "../../../context/auth";
import { colors } from "../../../styles/colors";

const AddExerciseModal = ({ closeModal, isVisible }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState(null);

  const {
    user: { userId },
  } = useAuth();

  const submitWorkout = async () => {
    const exercise = { userId, name, description };
    const response = await addExercise(exercise);

    if (!response) {
      console.log("Something went wrong!");
    }

    closeModal();
  };

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <SafeAreaView style={styles.modalView}>
        <View style={styles.modalHandle} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.contentContainer}>
          <View>
            <Text style={styles.headerTitle}>Add Exercise</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Exercise name</Text>
              <CustomInput
                value={name}
                onChangeText={name => setName(name)}
                style={styles.input}
                returnKeyType="done"
              />
              <Text style={styles.inputTitle}>Exercise description</Text>
              <CustomInput
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder={"Enter a description (optional)"}
                style={[styles.input, { height: 100, paddingTop: 10 }]}
                multiline={true}
                returnKeyType="done"
              />
            </View>
          </View>
          <Button
            backgroundColor={colors.blue09}
            btnText={"Done"}
            color={colors.white}
            handlePress={submitWorkout}
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

export default AddExerciseModal;

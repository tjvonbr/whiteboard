import React, { useState } from "react";
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
import Modal from "react-native-modal";
import { colors } from "../../../styles/colors";

const AddExerciseModal = ({ closeModal, addExercise, isVisible }) => {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <SafeAreaView>
      <Modal
        style={styles.modal}
        isVisible={isVisible}
        swipeDirection="down"
        onSwipeComplete={closeModal}
        useNativeDriver={true}>
        <View style={styles.modalView}>
          <View style={styles.modalHandle} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.contentContainer}>
            <View>
              <Text style={styles.header}>Add Exercise</Text>
              <Text style={styles.subheader}>
                Add a new exercise to include in your workouts and track your
                progress over time.
              </Text>
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
            <View style={styles.btnContainer}>
              <CustomButton
                backgroundColor={colors.primaryPurple}
                btnText={"Done"}
                color={colors.white}
                handlePress={() => addExercise(name, description)}
                width={"100%"}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalView: {
    flex: 0.93,
    backgroundColor: colors.white,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    flex: 1,
    width: "90%",
    marginTop: 40,
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
    color: colors.black,
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: 15,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 7,
  },
  header: {
    fontWeight: "600",
    fontSize: 21,
    color: colors.black,
  },
  subheader: {
    marginTop: 10,
    marginBottom: 40,
    fontSize: 14,
    color: colors.black,
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});

export default AddExerciseModal;

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
import Modal from "react-native-modal";
import { colors } from "../../../styles/colors";

type EditExerciseProps = {
  exercise: any;
  isVisible: boolean;
  hideModal: () => void;
};

const EditExerciseModal = ({
  exercise,
  isVisible,
  hideModal,
}: EditExerciseProps) => {
  const [newName, setNewName] = React.useState("");
  const [newDescription, setNewDescription] = React.useState(null);

  const { name, description } = exercise;

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
            <Text style={styles.headerTitle}>Edit Exercise</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Exercise name</Text>
              <CustomInput
                value={newName}
                onChangeText={name => setNewName(name)}
                placeholder={name}
                style={styles.input}
                returnKeyType="done"
              />
              <Text style={styles.inputTitle}>Exercise description</Text>
              <CustomInput
                value={newDescription}
                onChangeText={text => setNewDescription(text)}
                placeholder={description}
                style={[styles.input, { height: 100, paddingTop: 10 }]}
                multiline={true}
                returnKeyType="done"
              />
            </View>
          </View>
          <CustomButton
            backgroundColor={colors.blue09}
            btnText={"Save changes"}
            color={colors.white}
            handlePress={() => console.log("Edit exercise pressed")}
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

export default EditExerciseModal;

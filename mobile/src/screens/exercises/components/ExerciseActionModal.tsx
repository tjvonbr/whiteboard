import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import CustomButton from "../../../components/buttons/CustomButton";
import Modal from "react-native-modal";
import { colors } from "../../../styles/colors";

type EditExerciseProps = {
  isVisible: boolean;
  closeModal: () => void;
  deleteExercise: (exercise) => void;
  exercise: any;
};

const ExerciseActionModal = ({
  isVisible,
  closeModal,
  deleteExercise,
  exercise,
}: EditExerciseProps) => {
  const showDeleteAlert = () => {
    Alert.alert(
      "Delete exercise?",
      `Are you sure you want to delete ${exercise.name} from your records?`,
      [
        {
          text: "Yes",
          onPress: () => deleteExercise(exercise),
        },
        {
          text: "Cancel",
          onPress: closeModal,
        },
      ],
    );
  };

  return (
    <Modal
      style={styles.modalView}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <View>
        <CustomButton
          backgroundColor={"transparent"}
          btnText={"Delete"}
          color={"red"}
          handlePress={showDeleteAlert}
          width={"100%"}
        />
        <CustomButton
          backgroundColor={"transparent"}
          btnText={"Cancel"}
          color={colors.blue09}
          handlePress={closeModal}
          width={"100%"}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 0.15,
    margin: 0,
    marginTop: "auto",
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ExerciseActionModal;

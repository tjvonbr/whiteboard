import * as React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import DoneButton from "../../../components/buttons/DoneButton";
import ExitButton from "../../../components/buttons/ExitButton";
import Modal from "react-native-modal";
import { colors } from "../../../styles/colors";

type InputModalProps = {
  isVisible: boolean;
  closeModal: () => void;
  instructions: string;
  handleInstructions: (text: string) => void;
};

const InputModal = ({
  isVisible,
  closeModal,
  instructions,
  handleInstructions,
}: InputModalProps) => {
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <SafeAreaView style={styles.modalView}>
        <View style={styles.headerView}>
          <View style={styles.exitBtnContainer}>
            <ExitButton handlePress={closeModal} />
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Add Instructions</Text>
          </View>
          <View style={styles.doneBtnContainer}>
            <DoneButton
              color={instructions ? colors.black : "gray"}
              handlePress={closeModal}
            />
          </View>
        </View>
        <View style={{ height: 10 }} />
        <TextInput
          style={styles.instructionsInput}
          value={instructions}
          onChangeText={handleInstructions}
          placeholder="Enter further instructions..."
          placeholderTextColor="gray"
          multiline={true}
          keyboardType="default"
          returnKeyType="done"
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerView: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    borderBottomColor: colors.inputBorderGray,
    borderBottomWidth: 1,
  },
  exitBtnContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.black,
  },
  doneBtnContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  instructionsInput: {
    flex: 1,
    padding: 10,
  },
});

export default InputModal;

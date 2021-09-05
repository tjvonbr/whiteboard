import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ExitButton from "../buttons/ExitButton";
import NavigationBar from "../navigation/NavigationBar";
import Modal from "react-native-modal";
import { colors } from "../../styles/colors";

const AddNotesModal = ({ isVisible, hideModal }) => {
  const exitButton = <ExitButton handlePress={hideModal} />;

  return (
    <SafeAreaView>
      <Modal
        style={styles.modal}
        isVisible={isVisible}
        swipeDirection="down"
        onSwipeComplete={hideModal}
        useNativeDriver={true}>
        <SafeAreaView style={styles.modalView}>
          <NavigationBar leftHeader={exitButton} />
        </SafeAreaView>
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
    borderWidth: 1,
    borderColor: "black",
    flex: 0.93,
    backgroundColor: colors.white,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default AddNotesModal;

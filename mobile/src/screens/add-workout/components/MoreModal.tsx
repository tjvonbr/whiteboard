import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../styles/colors";

type MoreModalProps = {
  isVisible: boolean;
  closeModal: () => void;
};

const MoreModal = ({ isVisible, closeModal }: MoreModalProps) => {
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <SafeAreaView style={styles.modalView}>
        <Text>More Modal</Text>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 0.95,
    backgroundColor: colors.white,
    top: 20,
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
    fontSize: 21,
    fontWeight: "600",
    color: colors.black,
  },
  doneBtnContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MoreModal;

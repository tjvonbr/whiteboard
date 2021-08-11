import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import DoneButton from "../buttons/DoneButton";
import ExerciseItem from "./ExerciseItem";
import ExitButton from "../buttons/ExitButton";
import { exercises } from "../../assets/data/exercises";
import { colors } from "../../styles/colors";

type ExercisePickerProps = {
  isVisible: boolean;
  closeModal: () => void;
  selected: Map<any, any>;
  handleSelect: (id: number) => void;
};

const ExercisePicker = ({
  isVisible,
  closeModal,
  selected,
  handleSelect,
}: ExercisePickerProps) => {
  const [isExerciseSelected, setIsExerciseSelected] = React.useState(false);

  React.useEffect(() => {
    isTrue();
  }, [selected]);

  const clearAndClose = () => {
    // Clears the previously selected exercises
    closeModal();
  };

  const isTrue = () => {
    const selectedvalues = Array.from(selected.values());

    selectedvalues.includes(true)
      ? setIsExerciseSelected(true)
      : setIsExerciseSelected(false);
  };

  const renderItem = ({ item }) => {
    return (
      <ExerciseItem
        exercise={item}
        selected={!!selected.get(item.id)}
        handleSelect={handleSelect}
      />
    );
  };

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <SafeAreaView style={styles.modalView}>
        <View style={styles.headerView}>
          <View style={styles.exitBtnContainer}>
            <ExitButton handlePress={clearAndClose} />
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Pick some exercises</Text>
          </View>
          <View style={styles.doneBtnContainer}>
            <DoneButton
              color={isExerciseSelected ? colors.black : "gray"}
              handlePress={closeModal}
              disabled={!isExerciseSelected}
            />
          </View>
        </View>
        <FlatList
          data={exercises}
          extraData={selected}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 0.9,
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

export default ExercisePicker;

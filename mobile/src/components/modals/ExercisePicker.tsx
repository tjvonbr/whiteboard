import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import ExerciseItem from "./ExerciseItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import { exercises } from "../../assets/data/exercises";
import { colors } from "../../styles/colors";

type ExercisePickerProps = {
  isVisible: boolean;
  closeModal: () => void;
};

const ExercisePicker = ({ isVisible, closeModal }: ExercisePickerProps) => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  const renderItem = ({ item }) => {
    return (
      <ExerciseItem
        exercise={item}
        selected={!!selected.get(item.id)}
        handleSelect={onSelect}
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
          <Text style={styles.headerTitle}>Pick some exercises</Text>
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
    flex: 0.95,
    backgroundColor: colors.white,
    top: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.inputBorderGray,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: "600",
    color: colors.black,
  },
});

export default ExercisePicker;

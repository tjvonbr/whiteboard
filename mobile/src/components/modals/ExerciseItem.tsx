import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/colors";

type ExerciseItemProps = {
  exercise: {
    id: number;
    name: string;
  };
  selected: boolean;
  handleSelect: (id: number) => void;
};

const ExerciseItem = ({
  exercise,
  selected,
  handleSelect,
}: ExerciseItemProps) => {
  return (
    <TouchableOpacity
      style={styles.exerciseBtn}
      onPress={() => handleSelect(exercise.id)}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.exerciseTextContainer}>
          <Text style={styles.exerciseText}>{exercise.name}</Text>
        </View>
        <View style={styles.iconContainer}>
          {selected ? (
            <Icon name="done" size={30} color={colors.checkMarkGreen} />
          ) : null}
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  exerciseBtn: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderGray,
  },
  exerciseTextContainer: {
    flex: 8,
    justifyContent: "center",
  },
  exerciseText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
    color: colors.black,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExerciseItem;

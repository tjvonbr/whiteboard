import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { format, parseISO } from "date-fns";
import { colors } from "../../styles/colors";

const RoutinePickerItem = ({ item, handlePress, closeModal }) => {
  const [alpha, routines] = item;

  const selectRoutine = routine => {
    handlePress(routine);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.alphaContainer}>
        <Text style={styles.alpha}>{alpha}</Text>
      </View>
      {routines.map((routine, i) => {
        const { createdAt, name } = routine;

        const date = format(parseISO(createdAt), "MM/dd/yyyy");

        return (
          <TouchableOpacity
            style={styles.routineContainer}
            onPress={() => selectRoutine(routine)}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.muscles}>{date}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  alphaContainer: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  alpha: {
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 15,
    fontWeight: "600",
    color: colors.black,
  },
  routineContainer: {
    width: "90%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    color: colors.black,
  },
  muscles: {
    color: "gray",
  },
  multiple: {
    borderTopColor: colors.inputBorderGray,
    borderTopWidth: 1,
  },
});

export default RoutinePickerItem;

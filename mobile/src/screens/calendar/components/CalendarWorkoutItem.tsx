import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../styles/colors";

const CalendarWorkoutItem = ({ workout }) => {
  const { name, routine } = workout;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.workout}>{name}</Text>
          <Text style={styles.routine}>{routine.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  innerContainer: {
    width: "95%",
    height: "70%",
    flexDirection: "row",
  },
  workout: {
    fontWeight: "600",
    fontSize: 15,
    color: colors.black,
  },
  routine: {
    fontWeight: "500",
    fontSize: 14,
    color: "#808B96",
  },
});

export default CalendarWorkoutItem;

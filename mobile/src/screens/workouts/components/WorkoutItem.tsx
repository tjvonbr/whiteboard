import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { format, parseISO } from "date-fns";
import { colors } from "../../../styles/colors";

const WorkoutItem = ({ workout, navigateTo }) => {
  const { createdAt, name, routine } = workout;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateTo(workout)}>
      <View style={styles.innerContainer}>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.workout}>{name}</Text>
          <Text style={styles.routine}>{routine.name}</Text>
        </View>
        <Text style={styles.routine}>
          {format(parseISO(createdAt), "MM/dd/yyyy")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
    justifyContent: "space-between",
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

export default WorkoutItem;

import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { parse } from "date-fns";
import { colors } from "../../../styles/colors";

const RoutineListItem = ({ item, handlePress, handleLongPress }) => {
  const { name, createdAt } = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exerciseContainer}
        onPress={handlePress}
        onLongPress={handleLongPress}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.muscles}>{`Created at: ${createdAt}`}</Text>
        </View>
      </TouchableOpacity>
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
  exerciseContainer: {
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

export default RoutineListItem;

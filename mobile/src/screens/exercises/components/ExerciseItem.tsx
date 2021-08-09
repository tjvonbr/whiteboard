import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../styles/colors";

type ExerciseItemProps = {
  item: any;
  index: number;
};

const ExerciseItem = ({ item, index }: ExerciseItemProps) => {
  const [alpha, exercises] = item;

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.alphaContainer}>
        <Text style={styles.alpha}>{alpha}</Text>
      </View>
      {exercises.map((exercise, i) => {
        const { name, muscles } = exercise;

        return (
          <TouchableOpacity
            style={[
              styles.exerciseContainer,
              exercises.length > 1 && i != 0 ? styles.multiple : null,
            ]}
            onPress={() => console.log("Pressed exercise")}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.muscles}>{`Emphasis: ${
                muscles ? muscles : "None selected"
              }`}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ExerciseItem;

import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/colors";

const TodayWorkoutScore = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "45%",
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
    color: colors.black,
  },
  score: {
    fontWeight: "500",
    fontSize: 15,
    color: "gray",
    position: "absolute",
    bottom: 5,
  },
});

export default TodayWorkoutScore;

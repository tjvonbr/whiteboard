import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../styles/colors";

const TodayWorkoutTrend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trend</Text>
      <Icon name="arrow-drop-up" color={colors.checkMarkGreen} size={50} />
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
});

export default TodayWorkoutTrend;

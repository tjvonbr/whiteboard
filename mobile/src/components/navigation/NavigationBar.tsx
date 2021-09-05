import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const NavigationBar = ({
  leftHeader = null,
  title = null,
  rightHeader = null,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBtnContainer}>{leftHeader}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightBtnContainer}>{rightHeader}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  leftBtnContainer: {
    height: "100%",
    width: "25%",
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "50%",
    fontWeight: "600",
    fontSize: 21,
    color: colors.black,
  },
  rightBtnContainer: {
    height: "100%",
    width: "25%",
  },
});

export default NavigationBar;

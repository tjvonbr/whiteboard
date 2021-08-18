import * as React from "react";
import { StyleSheet, View } from "react-native";

const NavBar = ({ leftHeader = null, title = null, rightHeader = null }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBtnContainer}>{leftHeader}</View>
      <View style={styles.headerContainer}>{title}</View>
      <View style={styles.rightBtnContainer}>{rightHeader}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  leftBtnContainer: {
    height: "100%",
    width: "12%",
  },
  headerContainer: {
    height: "100%",
    width: "76%",
  },
  rightBtnContainer: {
    height: "100%",
    width: "12%",
  },
});

export default NavBar;

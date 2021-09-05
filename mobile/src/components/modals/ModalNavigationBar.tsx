import React from "react";
import { StyleSheet, View } from "react-native";

const ModalNavigationBar = () => {
  return (
    <View style={styles.navBar}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ModalNavigationBar;

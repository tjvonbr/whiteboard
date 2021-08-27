import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/colors";

const BackButton = ({ navigation: { goBack } }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => goBack()}>
      <Icon name="keyboard-backspace" color={colors.black} size={22} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    marginLeft: 5,
  },
});

export default BackButton;

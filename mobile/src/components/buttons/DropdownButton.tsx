import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/colors";

const DropdownButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{text}</Text>
        <Icon name="keyboard-arrow-down" color={colors.black} size={25} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    width: "100%",
    borderWidth: 0.5,
    borderColor: colors.inputBorderGray,
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
});

export default DropdownButton;

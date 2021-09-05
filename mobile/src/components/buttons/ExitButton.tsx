import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/colors";

type ExitButtonProps = {
  handlePress: () => void;
};

const ExitButton = ({ handlePress }: ExitButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Icon name="close" color={colors.black} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExitButton;

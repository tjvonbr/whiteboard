import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts } from "../../styles/fonts";

type FormBtnProps = {
  backgroundColor: string;
  btnText: string;
  color: string;
  handlePress: () => void;
  width: string | number;
};

const FormButton = ({
  backgroundColor,
  btnText,
  color,
  handlePress,
  width,
}: FormBtnProps) => {
  return (
    <TouchableOpacity
      style={[styles.formBtn, { backgroundColor, width }]}
      onPress={handlePress}>
      <Text style={[styles.formBtnText, { color }]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  formBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  formBtnText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default FormButton;
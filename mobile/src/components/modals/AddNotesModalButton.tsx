import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type AddNotesModalButtonProps = {
  buttonStyles: ViewStyle;
  textStyles?: TextStyle;
  text: string;
  showModal: () => void;
};

const AddNotesModalButton = ({
  buttonStyles,
  textStyles,
  text,
  showModal,
}: AddNotesModalButtonProps) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={showModal}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AddNotesModalButton;

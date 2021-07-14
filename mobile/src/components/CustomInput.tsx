import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import { colors } from "../styles/colors";

type CustomInputProps = {
  style: any;
  value: any;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
};

const CustomInput = ({
  style,
  value,
  onChangeText,
  placeholder,
  multiline,
  keyboardType,
  returnKeyType,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TextInput
      style={[style, isFocused ? styles.focusedInput : styles.unfocusedInput]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  focusedInput: { borderColor: "blue" },
  unfocusedInput: { borderColor: colors.inputBorderGray },
});

export default CustomInput;

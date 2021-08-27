import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../styles/colors";

const CustomInput = ({
  style,
  value,
  onChangeText,
  placeholder,
  multiline,
  keyboardType,
  returnKeyType,
  autoCapitalize,
  secureTextEntry,
}: TextInputProps) => {
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
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  focusedInput: {
    borderColor: colors.primaryPurple,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: colors.purpleShadow,
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  unfocusedInput: { borderColor: colors.inputBorderGray },
});

export default CustomInput;

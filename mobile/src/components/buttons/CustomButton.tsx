import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../styles/colors";

type CustomButtonProps = {
  backgroundColor: string;
  btnText: string;
  color: string;
  handlePress: any;
  width: string | number;
  isLoading?: boolean;
  loadingColor?: string;
  isDisabled?: boolean;
};

const CustomButton = ({
  backgroundColor,
  btnText,
  color,
  handlePress,
  width,
  isLoading,
  loadingColor = colors.white,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.formBtn, { backgroundColor, width }]}
      disabled={isDisabled}
      onPress={handlePress}>
      {isLoading ? (
        <ActivityIndicator color={loadingColor} size={25} />
      ) : (
        <Text style={[styles.formBtnText, { color }]}>{btnText}</Text>
      )}
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
    fontWeight: "600",
  },
});

export default CustomButton;

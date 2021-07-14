import * as React from "react";
import { colors } from "../../styles/colors";
import IconButton from "./IconButton";

type DoneButtonProps = {
  color: string;
  disabled: boolean;
  handlePress: () => void;
};

const DoneButton = ({ color, disabled, handlePress }: DoneButtonProps) => {
  return (
    <IconButton
      name="check"
      disabled={disabled}
      color={color}
      size={30}
      handlePress={handlePress}
    />
  );
};

export default DoneButton;

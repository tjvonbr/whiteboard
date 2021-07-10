import * as React from "react";
import { colors } from "../../styles/colors";
import IconButton from "./IconButton";

type DoneButtonProps = {
  handlePress: () => void;
};

const DoneButton = ({ handlePress }: DoneButtonProps) => {
  return (
    <IconButton
      name="check-circle-outline"
      color={colors.blue09}
      size={30}
      handlePress={handlePress}
    />
  );
};

export default DoneButton;

import * as React from "react";
import IconButton from "./IconButton";

type BackButtonProps = {
  handlePress: () => void;
};

const BackButton = ({ handlePress }: BackButtonProps) => {
  return (
    <IconButton
      name="keyboard-backspace"
      color="black"
      size={30}
      handlePress={handlePress}
    />
  );
};

export default BackButton;

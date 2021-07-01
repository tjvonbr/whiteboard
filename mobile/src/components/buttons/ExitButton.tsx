import * as React from "react";
import IconButton from "./IconButton";

type ExitButtonProps = {
  handlePress: () => void;
};

const ExitButton = ({ handlePress }: ExitButtonProps) => {
  return (
    <IconButton
      name="close"
      color="black"
      size={30}
      handlePress={handlePress}
    />
  );
};

export default ExitButton;

import * as React from "react";
import IconButton from "./IconButton";

type ExitButtonProps = {
  handlePress: () => void;
};

const MoreButton = ({ handlePress }: ExitButtonProps) => {
  return (
    <IconButton
      name="more-horiz"
      color="gray"
      size={30}
      handlePress={handlePress}
    />
  );
};

export default MoreButton;

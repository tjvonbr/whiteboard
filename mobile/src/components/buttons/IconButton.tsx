import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type IconButtonProps = {
  name: string;
  color: string;
  size: number;
  disabled?: boolean;
  buttonStyles?: any;
  handlePress: () => void;
};

const IconButton = ({
  name,
  color,
  size,
  disabled,
  buttonStyles,
  handlePress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={handlePress}
      disabled={disabled}>
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;

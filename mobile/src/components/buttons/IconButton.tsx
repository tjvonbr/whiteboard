import * as React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type IconButtonProps = {
  name: string;
  color: string;
  size: number;
  buttonStyles: any;
  handlePress: () => void;
};

const IconButton = ({
  name,
  color,
  size,
  buttonStyles,
  handlePress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={buttonStyles}>
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default IconButton;

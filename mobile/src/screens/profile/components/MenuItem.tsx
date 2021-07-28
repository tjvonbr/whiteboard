import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconButton from "../../../components/buttons/IconButton";
import { colors } from "../../../styles/colors";

type MenuItemProps = {
  index: number;
  title: string;
  subtitle?: string;
  handlePress: () => void;
};

const ProfileMenuItem = ({
  index,
  title,
  subtitle,
  handlePress,
}: MenuItemProps) => {
  let idx = 0;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, index === 0 ? styles.first : null]}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Icon name={"chevron-right"} color={colors.black} size={25} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: colors.inputBorderGray,
    borderTopWidth: 1,
  },
  first: {
    borderTopWidth: 0,
  },
  title: {
    marginBottom: 2,
    fontWeight: "600",
    color: colors.black,
  },
  subtitle: {
    color: "gray",
  },
});

export default ProfileMenuItem;

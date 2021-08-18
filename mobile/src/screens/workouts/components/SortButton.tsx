import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

const SortButton = ({ sortType, items, setValue, open, setOpen }) => {
  return (
    <DropDownPicker
      style={styles.container}
      value={sortType}
      items={items}
      setValue={setValue}
      open={open}
      setOpen={setOpen}
      textStyle={styles.label}
      dropDownContainerStyle={styles.dropdown}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    marginTop: 15,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  sortType: {
    fontWeight: "500",
  },
  label: {
    fontWeight: "500",
  },
  dropdown: {
    width: 100,
  },
});

export default SortButton;

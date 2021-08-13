import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const ProfileListItem = ({ item }) => {
  const [alpha, list] = item;

  return (
    <View style={styles.container}>
      <View style={styles.alphaContainer}>
        <Text style={styles.alpha}>{alpha}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  alphaContainer: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  alpha: {
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 15,
    fontWeight: "600",
    color: colors.black,
  },
});

export default ProfileListItem;

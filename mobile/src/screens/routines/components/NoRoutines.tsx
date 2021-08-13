import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/colors";

const NoRoutines = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.black }}>
        You haven't created any routines yet!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default NoRoutines;

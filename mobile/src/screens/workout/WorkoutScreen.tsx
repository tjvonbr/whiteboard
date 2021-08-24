import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const WorkoutScreen = ({ navigation, route }) => {
  console.log(route.params);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Workout Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
});

export default WorkoutScreen;

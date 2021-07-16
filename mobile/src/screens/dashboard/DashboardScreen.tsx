import * as React from "react";
import { Animated, SafeAreaView, View } from "react-native";
import TodayWidget from "./components/TodayWidget";
import styles from "./DashboardStyles";

const DashboardScreen = ({ navigation }) => {
  const toAddWorkout = (): void => {
    navigation.navigate("AddWorkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Animated.Text style={styles.title}>Dashboard</Animated.Text>
        <TodayWidget handlePress={toAddWorkout} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

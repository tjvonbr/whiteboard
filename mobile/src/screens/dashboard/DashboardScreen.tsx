import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import TodayWidget from "./components/TodayWidget";
import styles from "./DashboardStyles";

const DashboardScreen = ({ navigation }) => {
  const toAddWorkout = (): void => {
    navigation.navigate("AddWorkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Dashboard</Text>
        <TodayWidget handlePress={toAddWorkout} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

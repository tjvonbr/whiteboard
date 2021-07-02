import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./AddWorkoutStyles";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add Workout</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

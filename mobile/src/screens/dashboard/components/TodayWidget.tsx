import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../DashboardStyles";

type TodayWidgetProps = {
  handlePress: () => void;
};

const TodayWidget = ({ handlePress }: TodayWidgetProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.today}>
        <Text style={styles.todayDate}>Friday, July 1, 2021</Text>
        <Text style={styles.todaySummaryText}>No workout recorded today</Text>
        <Text style={styles.todayAddWorkout}>Click to add a workout</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodayWidget;

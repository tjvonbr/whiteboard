import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { format } from "date-fns";
import styles from "../DashboardStyles";

type TodayWidgetProps = {
  handlePress: () => void;
};

const TodayWidget = ({ handlePress }: TodayWidgetProps) => {
  const today = format(new Date(), "cccc, LLLL dd, yyyy");

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.today}>
        <Text style={styles.todayDate}>{today}</Text>
        <Text style={styles.todaySummaryText}>No workout recorded today</Text>
        <Text style={styles.todayAddWorkout}>Click to add a workout</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodayWidget;

import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodayWorkoutScore from "./TodayWorkoutScore";
import TodayWorkoutTrend from "./TodayWorkoutTrend";
import { fetchWorkoutsByDate } from "../DashboardRequests";
import { format } from "date-fns";
import { colors } from "../../../styles/colors";

type TodayWidgetProps = {
  handlePress: () => void;
};

const TodayWidget = ({ handlePress }: TodayWidgetProps) => {
  const [todaysWorkout, setTodaysWorkout] = React.useState(null);
  console.log(todaysWorkout);

  const today = format(new Date(), "cccc, LLLL dd, yyyy");

  React.useEffect(() => {
    const fetchTodaysWorkout = async () => {
      const queryDate = format(new Date(), "yyyy-MM-dd");

      const workouts = await fetchWorkoutsByDate(queryDate);
      const workout = workouts[0];

      setTodaysWorkout(workout);
    };

    fetchTodaysWorkout();
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.dateContainer}>
        <Text style={styles.todayDate}>{today}</Text>
        <Text style={styles.todaySummaryText}>
          {todaysWorkout ? null : "No workout recorded for today"}
        </Text>
      </View>
      <View style={styles.workoutContainer}>
        <Text style={styles.routineName}>
          {todaysWorkout ? todaysWorkout.routine.name : null}
        </Text>
        <View style={styles.detailsContainer}>
          {/* <TodayWorkoutScore score={todaysWorkout.score} />
          <TodayWorkoutTrend /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#3862B0",
  },
  dateContainer: {
    width: "100%",
  },
  todayDate: {
    marginTop: 6,
    marginLeft: 15,
    color: "#EBF5FB",
    fontWeight: "600",
    fontSize: 18,
  },
  todaySummaryText: {
    marginLeft: 11,
    color: "#D6EAF8",
    fontWeight: "500",
    fontSize: 15,
  },
  workoutContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "92%",
    height: "60%",
  },
  routineName: {
    fontWeight: "500",
    fontSize: 18,
    color: "#EBF5FB",
  },
  detailsContainer: {
    width: "70%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TodayWidget;

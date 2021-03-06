import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  exercisesContainer: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  subheader: {
    fontWeight: "600",
    fontSize: 21,
    color: colors.black,
    textAlign: "left",
  },
  selected: {
    borderWidth: 1,
    borderColor: "red",
  },
  monthNavigation: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  month: {
    width: 150,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    color: colors.black,
  },
  calendarRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dayOfWeekContainer: {
    width: 50,
    height: 42,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dayOfWeek: {
    fontWeight: "700",
    fontSize: 14,
    color: colors.black,
  },
  year: {
    fontWeight: "600",
    fontSize: 14,
  },
  selectedDay: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  exercisesListContainer: {
    width: "100%",
    alignItems: "center",
  },
  addWorkoutButton: {
    height: 40,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#e6e6ff",
  },
  addWorkoutText: {
    fontWeight: "600",
    fontSize: 15,
    color: "blue",
    padding: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  exercisesContainer: {
    width: "90%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  subheader: {
    fontWeight: "600",
    fontSize: 21,
    color: colors.black,
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
});

export default styles;

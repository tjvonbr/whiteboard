import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  monthNavigation: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  month: {
    marginHorizontal: 20,
    fontWeight: "600",
    fontSize: 21,
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
    fontWeight: "600",
    fontSize: 14,
    color: colors.black,
  },
  selectedDay: {
    width: 27,
    height: 27,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;

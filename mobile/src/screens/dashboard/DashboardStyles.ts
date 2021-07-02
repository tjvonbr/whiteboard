import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  innerContainer: {
    width: "90%",
  },
  title: {
    marginVertical: 20,
    color: colors.black,
    fontWeight: "600",
    fontSize: 30,
  },
  today: {
    width: "100%",
    height: 200,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 25,
  },
  todayDate: {
    marginTop: 6,
    marginLeft: 11,
    color: colors.black,
    fontWeight: "600",
    fontSize: 21,
  },
  todaySummaryText: {
    marginLeft: 11,
    color: "gray",
    fontWeight: "500",
    fontSize: 15,
  },
  todayAddWorkout: {
    alignSelf: "center",
    position: "absolute",
    top: "50%",
  },
});

export default styles;

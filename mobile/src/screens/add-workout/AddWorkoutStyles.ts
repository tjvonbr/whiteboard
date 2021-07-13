import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    width: "90%",
  },
  customHeader: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contentContainer: {
    flex: 3,
    width: "100%",
    alignItems: "flex-start",
  },
  addExerciseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginVertical: 20,
    textAlign: "left",
    borderColor: "black",
    fontWeight: "600",
    fontSize: 24,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
  },
  description: {
    height: 100,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
  },
  timeLimitInput: {
    height: 50,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
  },
  btnContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  btnPrimary: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: colors.blue09,
  },
  btnTextPrimary: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
  btnSecondary: {
    height: 53,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "transparent",
  },
  btnTextSecondary: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.blue09,
  },
  registerInput: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    color: colors.black,
    fontSize: 15,
    borderColor: colors.inputBorderGray,
    borderWidth: 2,
    borderRadius: 7,
  },
  inputTitle: {
    color: "#4F4F4F",
    marginBottom: 3,
    paddingLeft: 5,
  },
  exerciseInputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  exerciseTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.black,
  },
  exerciseDescriptionInput: {
    width: "100%",
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f5f2f2",
  },
  setInputSectionContainer: {
    flex: 1,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  setInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  setInputTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.black,
  },
  setInput: {
    width: 100,
    height: 40,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.inputBorderGray,
    borderRadius: 5,
  },
});

export default styles;

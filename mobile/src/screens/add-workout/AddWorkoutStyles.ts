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
    marginTop: 15,
  },
  header: {
    fontWeight: "600",
    fontSize: 21,
    color: "black",
  },
  subheader: {
    marginTop: 10,
    marginBottom: 40,
    color: colors.black,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    color: colors.black,
    fontSize: 15,
    marginBottom: 5,
  },
  notes: {
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.inputBorderGray,
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: colors.white,
    color: colors.black,
  },
  timeLimitInput: {
    height: 50,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 20,
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
    height: 50,
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: 15,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
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
  fauxInputButton: {
    width: "100%",
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f5f2f2",
  },
  fauxInputBtnText: {
    color: "gray",
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

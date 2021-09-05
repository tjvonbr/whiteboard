import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
    width: "90%",
  },
  customHeader: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  contentContainer: {
    flex: 3,
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    marginVertical: 20,
    color: colors.black,
    fontWeight: "600",
    fontSize: 24,
  },
  subtitle: {
    marginBottom: 15,
    color: colors.black,
    fontWeight: "400",
    fontSize: 15,
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
    backgroundColor: colors.white,
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
});

export default styles;

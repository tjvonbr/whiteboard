import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  contentContainer: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    color: colors.black,
    fontWeight: "400",
    fontSize: 24,
  },
  btnContainer: {
    flex: 1,
    width: "90%",
    alignItems: "center",
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
    width: 250,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    color: colors.black,
    fontSize: 18,
  },
});

export { styles };

import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginTop: 20,
    flex: 1,
    width: "90%",
  },
  title: {
    marginBottom: 15,
    textAlign: "left",
    borderColor: "black",
    color: "black",
    fontWeight: "600",
    fontSize: 24,
  },
  section: {
    marginBottom: 20,
  },
  inputTitle: {
    color: "#4F4F4F",
    fontWeight: "600",
    marginBottom: 5,
    paddingLeft: 5,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
    color: colors.black,
    fontSize: 15,
    borderColor: colors.inputBorderGray,
    borderWidth: 1,
    borderRadius: 7,
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});

export default styles;

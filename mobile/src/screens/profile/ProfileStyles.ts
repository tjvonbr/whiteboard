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
    marginTop: 20,
    color: colors.black,
    fontWeight: "600",
    fontSize: 30,
  },
  userName: {
    color: "gray",
    fontWeight: "600",
    fontSize: 21,
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
});

export default styles;

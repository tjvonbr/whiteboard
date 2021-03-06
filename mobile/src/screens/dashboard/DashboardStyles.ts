import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAECEE",
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
});

export default styles;

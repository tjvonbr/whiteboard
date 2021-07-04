import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  title: {
    marginVertical: 20,
    color: colors.black,
    fontWeight: "600",
    fontSize: 24,
  },
});

export default styles;

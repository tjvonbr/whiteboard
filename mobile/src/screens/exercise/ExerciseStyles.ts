import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
});

export default styles;

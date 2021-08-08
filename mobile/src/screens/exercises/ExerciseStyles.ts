import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  alphaNavigator: {
    width: 20,
    position: "absolute",
    top: "50%",
    right: "1%",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});

export default styles;

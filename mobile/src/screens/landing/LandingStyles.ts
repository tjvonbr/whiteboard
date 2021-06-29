import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    color: colors.black,
    fontWeight: "600",
    fontSize: 24,
  },
  subtitle: {
    textAlign: "center",
    color: colors.black,
    fontWeight: "500",
    fontSize: 15,
  },
  btnContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnPrimary: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
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
});

export { styles };

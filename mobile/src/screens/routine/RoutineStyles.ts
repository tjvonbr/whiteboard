import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
  },
  section: {},
  sectionTitle: {
    fontWeight: "600",
    fontSize: 21,
  },
  sectionSubtitle: {
    fontWeight: "600",
    fontSize: 15,
  },
  overviewContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  overviewDetail: {
    height: 100,
    width: 100,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.inputBorderGray,
    borderRadius: 5,
  },
  overViewDetailTitle: {
    fontWeight: "500",
    fontSize: 14,
  },
  performanceWidget: {
    width: 300,
    height: 150,
    borderWidth: 0.5,
    borderColor: colors.inputBorderGray,
    borderRadius: 5,
  },
  btnContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
});

export default styles;

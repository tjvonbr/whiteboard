import * as React from "react";
import { StyleSheet, View } from "react-native";
import QuickSelectButton from "./QuickSelectButton";
import { QuickSelect } from "../CalendarScreen";
import { iterateEnum } from "../CalendarHelpers";

const QuickSelectOptions = ({ selectedPeriod }) => {
  let timePeriods = iterateEnum(QuickSelect);

  return (
    <View style={styles.quickSelectContainer}>
      {timePeriods.map(period => (
        <QuickSelectButton period={period} selectedPeriod={selectedPeriod} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  quickSelectContainer: {
    width: "90%",
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default QuickSelectOptions;

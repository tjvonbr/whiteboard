import * as React from "react";
import { StyleSheet, View } from "react-native";
import QuickSelectButton from "./QuickSelectButton";
import { QuickSelect } from "../CalendarScreen";
import { iterateEnum } from "../CalendarHelpers";

const QuickSelectOptions = ({ selectedPeriod, changeSelectedPeriod }) => {
  let timePeriods = iterateEnum(QuickSelect);
  console.log(selectedPeriod);

  return (
    <View style={styles.quickSelectContainer}>
      {timePeriods.map(period => (
        <QuickSelectButton
          period={period}
          selectedPeriod={selectedPeriod}
          changeSelectedPeriod={changeSelectedPeriod}
        />
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

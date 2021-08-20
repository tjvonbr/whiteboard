import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { format, isSameDay, isSameMonth } from "date-fns";
import styles from "../CalendarStyles";
import { colors } from "../../../styles/colors";
import { takeMonth } from "../CalendarHelpers";

const CalendarDay = ({ day, selectDate, selectedDate }) => {
  const dayColor = () => {
    if (!isSameMonth(day, new Date())) {
      return "gray";
    } else {
      colors.black;
    }

    if (isSameDay(day, new Date()) && !isSameDay(day, selectedDate)) {
      return colors.blue09;
    }

    if (isSameDay(day, selectedDate)) {
      return colors.white;
    }
  };

  const backgroundColor = () => {
    if (isSameDay(day, selectedDate)) {
      return colors.black;
    }
  };

  return (
    <TouchableOpacity
      style={styles.dayOfWeekContainer}
      onPress={() => selectDate(day)}>
      <View
        style={[styles.selectedDay, { backgroundColor: backgroundColor() }]}>
        <Text style={{ color: dayColor() }}>{format(day, "d")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalendarDay;

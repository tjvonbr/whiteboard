import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { format, isSameDay, isSameMonth } from "date-fns";
import styles from "../CalendarStyles";
import { colors } from "../../../styles/colors";

const CalendarDay = ({ month, day, selectDate, selectedDate }) => {
  const dayColor = () => {
    let fontColor;

    if (isSameMonth(day, month)) {
      fontColor = colors.black;
    } else {
      fontColor = "gray";
    }

    if (isSameDay(day, new Date()) && !isSameDay(day, selectedDate)) {
      fontColor = colors.blue09;
    }

    if (isSameDay(day, selectedDate)) {
      fontColor = colors.white;
    }

    return fontColor;
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
        <Text style={{ fontWeight: "600", color: dayColor() }}>
          {format(day, "d")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalendarDay;

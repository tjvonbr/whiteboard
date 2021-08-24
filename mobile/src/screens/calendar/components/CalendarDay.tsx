import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { format, isSameDay, isSameMonth } from "date-fns";
import styles from "../CalendarStyles";
import { colors } from "../../../styles/colors";

type Props = {
  month: Date;
  day: Date;
  selectDate: (date: Date) => void;
  selectedDate: Date;
  toggleSelectDate: (date: Date) => void;
  beginningDate: Date;
  endDate: Date;
  setDateRange: (date: Date) => void;
};

const CalendarDay = ({
  month,
  day,
  selectDate,
  toggleSelectDate,
  selectedDate,
  beginningDate,
  endDate,
  setDateRange,
}: Props) => {
  const dayColor = () => {
    let fontColor;

    if (isSameMonth(day, month)) {
      fontColor = colors.black;
    } else {
      fontColor = "gray";
    }

    if (isSameDay(day, new Date()) && !isSameDay(day, selectedDate)) {
      fontColor = "blue";
    }

    if (isSameDay(day, selectedDate)) {
      fontColor = colors.white;
    }

    if (isSameDay(day, beginningDate) || isSameDay(day, endDate)) {
      fontColor = "white";
    }
    return fontColor;
  };

  const backgroundColor = () => {
    if (isSameDay(day, selectedDate)) {
      return colors.black;
    } else if (isSameDay(day, beginningDate)) {
      return colors.black;
    } else if (isSameDay(day, endDate)) {
      return colors.black;
    }

    if (!selectedDate) {
      return "transparent";
    }
  };

  return (
    <TouchableOpacity
      style={styles.dayOfWeekContainer}
      onPress={() => toggleSelectDate(day)}
      onLongPress={() => setDateRange(day)}>
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

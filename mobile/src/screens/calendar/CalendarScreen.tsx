import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CalendarDay from "./components/CalendarDay";
import QuickSelectOptions from "./components/QuickSelectOptions";
import Icon from "react-native-vector-icons/MaterialIcons";
import { takeMonth } from "./CalendarHelpers";
import { daysOfWeek } from "./calendar-data";
import { format, addMonths, subMonths } from "date-fns";
import styles from "./CalendarStyles";
import { colors } from "../../styles/colors";
import getYear from "date-fns/getYear";

export enum QuickSelect {
  DAY = "Day",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}

const Calendar = ({ navigation }) => {
  const [month, setMonth] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedPeriod, setSelectedPeriod] = React.useState(QuickSelect.DAY);

  const monthData = takeMonth(month)();

  const selectDate = date => setSelectedDate(date);

  function addMonth() {
    const nextMonth = addMonths(month, 1);

    setMonth(nextMonth);
  }

  function subtractMonth() {
    const prevMonth = subMonths(month, 1);

    setMonth(prevMonth);
  }

  return (
    <SafeAreaView style={styles.container}>
      <QuickSelectOptions
        selectedPeriod={selectedPeriod}
        changeSelectedPeriod={setSelectedPeriod}
      />
      <View style={styles.monthNavigation}>
        <TouchableOpacity onPress={subtractMonth}>
          <Icon name="chevron-left" color={colors.black} size={35} />
        </TouchableOpacity>
        <Text style={styles.month}>{format(month, "MMMM")}</Text>
        <TouchableOpacity onPress={addMonth}>
          <Icon name="chevron-right" color={colors.black} size={35} />
        </TouchableOpacity>
      </View>
      <Text style={styles.year}>{getYear(month)}</Text>
      <View style={[styles.dayOfWeekContainer, { marginTop: 20 }]}>
        {daysOfWeek.map((day, i) => (
          <View style={styles.dayOfWeekContainer} key={i}>
            <Text style={styles.dayOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
      {monthData.map(week => (
        <View style={styles.dayOfWeekContainer}>
          {week.map(day => (
            <CalendarDay
              month={month}
              day={day}
              selectDate={selectDate}
              selectedDate={selectedDate}
            />
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Calendar;

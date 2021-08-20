import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CalendarDay from "./components/CalendarDay";
import Icon from "react-native-vector-icons/MaterialIcons";
import { takeMonth, addMonth } from "./CalendarHelpers";
import { daysOfWeek } from "./calendar-data";
import { format, isSameMonth } from "date-fns";
import styles from "./CalendarStyles";
import { colors } from "../../styles/colors";

const Calendar = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const monthData = takeMonth()();

  const selectDate = date => setSelectedDate(date);

  const sameMonth = day => isSameMonth(day, new Date());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.monthNavigation}>
        <TouchableOpacity onPress={() => console.log("Decrement")}>
          <Icon name="chevron-left" color={colors.black} size={35} />
        </TouchableOpacity>
        <Text style={styles.month}>Month</Text>
        <TouchableOpacity onPress={() => addMonth()}>
          <Icon name="chevron-right" color={colors.black} size={35} />
        </TouchableOpacity>
      </View>
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

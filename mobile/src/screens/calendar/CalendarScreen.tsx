import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CalendarDay from "./components/CalendarDay";
import QuickSelectOptions from "./components/QuickSelectOptions";
import Icon from "react-native-vector-icons/MaterialIcons";
import { takeMonth, takeWeek } from "./CalendarHelpers";
import { daysOfWeek } from "./calendar-data";
import { format, addMonths, subMonths } from "date-fns";
import { useAuth } from "../../context/auth";
import { fetchWorkoutsFor } from "./CalendarRequests";
import styles from "./CalendarStyles";
import { colors } from "../../styles/colors";
import getYear from "date-fns/getYear";
import isSameDay from "date-fns/isSameDay";

export enum QuickSelect {
  TODAY = "Today",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}

const Calendar = ({ navigation }) => {
  const [month, setMonth] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = React.useState(QuickSelect.TODAY);
  const [beginningDate, setBeginningDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [workouts, setWorkouts] = React.useState([]);

  const {
    user: { userId },
  } = useAuth();

  React.useEffect(() => {
    const timePeriods = [selectedDate, selectedDate];

    async function fetchExercisesForTimePeriod() {
      const response = await fetchWorkoutsFor(userId, timePeriods);

      console.log(response);
    }

    fetchExercisesForTimePeriod();
  }, [selectedPeriod]);

  const monthData = takeMonth(month)();

  const toggleSelectDate = date => {
    if (isSameDay(date, selectedDate)) {
      setSelectedDate(null);
    }

    if (selectedDate) {
      setSelectedDate(date);
    }

    if (!selectedDate) {
      setSelectedDate(date);
    }

    if (beginningDate || endDate) {
      if (isSameDay(date, beginningDate)) {
        setBeginningDate(null);
      }

      if (isSameDay(date, endDate)) {
        setEndDate(null);
      }
    }

    if (endDate) {
      setEndDate(null);
    }
  };

  function addMonth() {
    const nextMonth = addMonths(month, 1);

    setMonth(nextMonth);
  }

  function subtractMonth() {
    const prevMonth = subMonths(month, 1);

    setMonth(prevMonth);
  }

  function setDateRange(date) {
    if (selectedDate) {
      setSelectedDate(null);
    }

    if (isSameDay(date, beginningDate)) {
      setBeginningDate(null);
    }

    if (isSameDay(date, endDate)) {
      setEndDate(null);
    }

    if (!beginningDate) {
      setBeginningDate(date);
    } else {
      setEndDate(date);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
              selectDate={toggleSelectDate}
              selectedDate={selectedDate}
              toggleSelectDate={toggleSelectDate}
              beginningDate={beginningDate}
              endDate={endDate}
              setDateRange={setDateRange}
            />
          ))}
        </View>
      ))}
      <View style={styles.exercisesContainer}>
        <Text style={styles.subheader}>Exercises</Text>
      </View>
    </SafeAreaView>
  );
};

export default Calendar;

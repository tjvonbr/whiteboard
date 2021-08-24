import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "../screens/calendar/CalendarScreen";
import WorkoutScreen from "../screens/workout/WorkoutScreen";

const Stack = createStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator initialRouteName="Calendar">
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  );
};

export default CalendarStack;

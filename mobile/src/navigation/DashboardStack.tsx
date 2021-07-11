import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddWorkout from "../screens/add-workout/AddWorkout";
import Dashboard from "../screens/dashboard/Dashboard";
import WorkoutDetails from "../screens/add-workout/WorkoutDetails";

const Stack = createStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="AddWorkout"
        component={AddWorkout}
        options={{ title: "Add Workout" }}
      />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Details" component={WorkoutDetails} />
    </Stack.Navigator>
  );
}

export default DashboardStack;

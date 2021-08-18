import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddWorkoutScreen from "../screens/add-workout/AddWorkoutScreen";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import SubmitWorkoutScreen from "../screens/add-workout/SubmitWorkoutScreen";
import WorkoutDetails from "../screens/add-workout/WorkoutDetails";
import { useTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

function DashboardStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="AddWorkout"
        component={AddWorkoutScreen}
        options={{ title: "Add Workout" }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={WorkoutDetails} />
      <Stack.Screen
        name="SubmitWorkout"
        component={SubmitWorkoutScreen}
        options={{
          title: "Add Workout",
          headerBackTitle: "Back",
          headerRight: () => {
            return (
              <TouchableOpacity style={{ marginRight: 8 }}>
                <Text style={{ fontSize: 17, color: colors?.primary }}>
                  Save
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;

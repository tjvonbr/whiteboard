import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExerciseScreen from "../screens/exercise/ExerciseScreen";
import ExercisesScreen from "../screens/exercises/ExercisesScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import RoutinesScreen from "../screens/routines/RoutinesScreen";
import RoutineScreen from "../screens/routine/RoutineScreen";
import AddRoutineScreen from "../screens/routines/AddRoutineScreen";
import AddExercisesToRoutineScreen from "../screens/routines/AddExercisesToRoutineScreen";
import WorkoutsScreen from "../screens/workouts/WorkoutsScreen";
import WorkoutScreen from "../screens/workout/WorkoutScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Exercises" component={ExercisesScreen} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
      <Stack.Screen name="Routines" component={RoutinesScreen} />
      <Stack.Screen name="Routine" component={RoutineScreen} />
      <Stack.Screen
        name="AddRoutine"
        component={AddRoutineScreen}
        options={{ title: "Add Routine" }}
      />
      <Stack.Screen
        name="AddExercises"
        component={AddExercisesToRoutineScreen}
        options={{ title: "Add Exercises", headerBackTitle: "Routine" }}
      />
      <Stack.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#F4F6F6",
          },
        }}
      />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

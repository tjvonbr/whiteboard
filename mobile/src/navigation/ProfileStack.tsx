import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExerciseScreen from "../screens/exercise/ExerciseScreen";
import ExercisesScreen from "../screens/exercises/ExercisesScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import RoutineScreen from "../screens/routines/RoutineScreen";

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
      <Stack.Screen name="Routines" component={RoutineScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

import * as React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ExerciseScreen from "../screens/exercises/ExerciseScreen";
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
      <Stack.Screen name="Exercises" component={ExerciseScreen} />
      <Stack.Screen name="Routines" component={RoutineScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

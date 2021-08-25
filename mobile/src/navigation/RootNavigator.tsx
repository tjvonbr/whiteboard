import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import ConfirmRegistration from "../screens/register/ConfirmRegistration";
import Landing from "../screens/landing/Landing";
import LoginScreen from "../screens/login/LoginScreen";
import Register from "../screens/register/Register";
import Splash from "../screens/splash/Splash";
import { useAuth } from "../context/auth";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { user, isIdle } = useAuth();

  if (isIdle) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user.jwt ? (
          <>
            <Stack.Screen name="App" component={AppNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Confirm" component={ConfirmRegistration} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

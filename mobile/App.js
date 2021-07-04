import "react-native-gesture-handler";
import * as React from "react";
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./src/navigation/AppNavigator"
import ConfirmRegistration from "./src/screens/register/ConfirmRegistration"
import Landing from "./src/screens/landing/Landing"
import Login from "./src/screens/login/Login"
import Register from "./src/screens/register/Register"

Amplify.configure(awsconfig);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = true

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        { isLoggedIn ? (
          <>
            <Stack.Screen name="App" component={AppNavigator}/>
          </>
        ) : (
          <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Confirm" component={ConfirmRegistration} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

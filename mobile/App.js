import "react-native-gesture-handler";
import * as React from "react";
import ConfirmRegistration from "./src/screens/register/ConfirmRegistration";
import Landing from "./src/screens/landing/Landing";
import Login from "./src/screens/login/Login";
import Register from "./src/screens/register/Register";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Confirm" component={ConfirmRegistration}/>
        <Stack.Screen name="Login" component={Login} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

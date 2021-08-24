import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardStack from "./DashboardStack";
import CalendarStack from "./CalendarStack";
import ProfileStack from "./ProfileStack";
import Statistics from "../screens/statistics/Statistics";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "home";
          } else if (route.name === "Calendar") {
            iconName = "event";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else {
            iconName = "leaderboard";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Calendar" component={CalendarStack} />
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

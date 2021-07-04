import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardStack from "./DashboardStack";
import Calendar from "../screens/calendar/Calendar";
import Statistics from "../screens/statistics/Statistics";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator initialRouteName="DashboardStack">
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="DashboardStack" component={DashboardStack} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}

export default AppNavigator;

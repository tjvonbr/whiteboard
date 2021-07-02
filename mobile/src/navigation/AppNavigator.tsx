import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardStackScreen from "./DashboardNavigator";
import Calendar from "../screens/calendar/Calendar";
import Statistics from "../screens/statistics/Statistics";

const AppTab = createBottomTabNavigator();

function AppTabs() {
  return (
    <AppTab.Navigator initialRouteName="Dashboard">
      <AppTab.Screen name="Calendar" component={Calendar} />
      <AppTab.Screen name="Dashboard" component={DashboardStackScreen} />
      <AppTab.Screen name="Statistics" component={Statistics} />
    </AppTab.Navigator>
  );
}

export default AppTabs;

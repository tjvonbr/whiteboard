import { createStackNavigator } from "@react-navigation/stack";
import AddWorkout from "../screens/add-workout/AddWorkout";
import Dashboard from "../screens/dashboard/Dashboard";

const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator initialRouteName="Dashboard">
      <DashboardStack.Screen name="AddWorkout" component={AddWorkout} />
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}

export default DashboardStackScreen;

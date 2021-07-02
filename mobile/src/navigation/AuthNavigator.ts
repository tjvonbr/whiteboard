import { createStackNavigator } from "react-navigation-stack";
import ConfirmRegistration from "../screens/register/ConfirmRegistration";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    Confirm: {
      screen: ConfirmRegistration,
    },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  },
);

export default AuthNavigator;

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppTabs from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import Landing from "../screens/landing/Landing";
import Splash from "../screens/splash/Splash";

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Splash: Splash,
    Auth: AuthNavigator,
    App: AppTabs,
  }),
);

export default AppContainer;

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppTabs from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import Landing from "../screens/landing/Landing";

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Landing: Landing,
    Auth: AuthNavigator,
    App: AppTabs,
  }),
);

export default AppContainer;

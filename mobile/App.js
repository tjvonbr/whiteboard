import "react-native-gesture-handler";
import * as React from "react";
import AppContainer from "./src/navigation/RootNavigator.ts"
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;

import "react-native-gesture-handler";
import * as React from "react";
import { AuthProvider } from "./src/context/auth"
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import RootNavigator from "./src/navigation/RootNavigator.tsx"

Amplify.configure(awsconfig);

const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;

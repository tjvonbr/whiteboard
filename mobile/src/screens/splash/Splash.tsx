import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { Auth } from "aws-amplify";
import styles from "./SplashStyles";

const Splash = ({ navigation }) => {
  React.useEffect(() => {
    isSignedIn();
  }, []);

  async function isSignedIn() {
    try {
      const user = await Auth.currentSession();
      console.log(user);
      navigation.navigate("Register");
    } catch (error) {
      console.log("error fetching latest session: ", error);
      navigation.navigate("Login");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Whiteboard</Text>
    </SafeAreaView>
  );
};

export default Splash;

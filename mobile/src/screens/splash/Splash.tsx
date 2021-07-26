import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./SplashStyles";

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Whiteboard</Text>
    </SafeAreaView>
  );
};

export default Splash;

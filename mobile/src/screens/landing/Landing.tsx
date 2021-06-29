import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./LandingStyles";
import { colors } from "../../styles/colors";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Whiteboard</Text>
        <Text style={styles.subtitle}>
          Start tracking your progress in the gym hassle-free
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => navigation.navigate("Register")}>
          <Text style={styles.btnTextPrimary}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btnTextSecondary}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

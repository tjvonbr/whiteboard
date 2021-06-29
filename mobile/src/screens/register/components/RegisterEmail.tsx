import * as React from "react";
import { Text, TextInput, View } from "react-native";

const RegisterEmail = () => {
  return (
    <View>
      <Text>What is your email?</Text>
      <TextInput placeholder="Enter your email" />
    </View>
  );
};

export default RegisterEmail;

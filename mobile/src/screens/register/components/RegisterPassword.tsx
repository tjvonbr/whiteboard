import * as React from "react";
import { Text, TextInput, View } from "react-native";

const RegisterPassword = () => {
  return (
    <View>
      <Text>Please enter a password</Text>
      <TextInput placeholder="Enter a secure password" />
    </View>
  );
};

export default RegisterPassword;

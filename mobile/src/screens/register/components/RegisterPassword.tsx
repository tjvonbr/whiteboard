import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/RegisterStyles";

type RegisterPasswordProps = {
  password: string;
  confirmPassword: string;
  handlePassword: (password: string) => void;
  handleConfirmPassword: (password: string) => void;
};

const RegisterPassword = ({
  password,
  confirmPassword,
  handlePassword,
  handleConfirmPassword,
}: RegisterPasswordProps) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Please enter a password</Text>
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
        style={styles.registerInput}
        value={password}
        onChangeText={handlePassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <Text style={styles.inputTitle}>Confirm Password</Text>
      <TextInput
        style={styles.registerInput}
        value={confirmPassword}
        onChangeText={handleConfirmPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
    </View>
  );
};

export default RegisterPassword;

import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/RegisterStyles";

type RegisterPasswordProps = {
  password: string;
  handlePassword: (password: string) => void;
};

const RegisterPassword = ({
  password,
  handlePassword,
}: RegisterPasswordProps) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Please enter a password</Text>
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
        style={styles.registerInput}
        value={password}
        onChangeText={handlePassword}
        secureTextEntry={true}
      />
      <Text style={styles.inputTitle}>Confirm Password</Text>
      <TextInput
        style={styles.registerInput}
        value={password}
        onChangeText={handlePassword}
        secureTextEntry={true}
      />
    </View>
  );
};

export default RegisterPassword;

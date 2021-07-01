import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/RegisterStyles";

type RegisterEmailProps = {
  email: string;
  handleEmail: (email: string) => void;
};

const RegisterEmail = ({ email, handleEmail }: RegisterEmailProps) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>What is your email?</Text>
      <Text style={styles.inputTitle}>Email</Text>
      <TextInput
        style={styles.registerInput}
        value={email}
        onChangeText={handleEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
    </View>
  );
};

export default RegisterEmail;

import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/RegisterStyles";

type RegisterNameProps = {
  firstName: string;
  lastName: string;
  handleFirstName: (text: string) => void;
  handleLastName: (text: string) => void;
};

const RegisterName = ({
  firstName,
  lastName,
  handleFirstName,
  handleLastName,
}: RegisterNameProps) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>What is your name?</Text>
      <TextInput
        style={styles.registerInput}
        value={firstName}
        onChangeText={handleFirstName}
        placeholder="First name"
      />
      <TextInput
        style={styles.registerInput}
        value={lastName}
        onChangeText={handleLastName}
        placeholder="Last name"
      />
    </View>
  );
};

export default RegisterName;

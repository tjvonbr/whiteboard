import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/RegisterStyles";
import { colors } from "../../../styles/colors";

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
      <Text style={styles.title}>What should we call you?</Text>
      <Text style={styles.inputTitle}>First Name</Text>
      <TextInput
        style={styles.registerInput}
        value={firstName}
        onChangeText={handleFirstName}
        returnKeyType={"next"}
      />
      <Text style={styles.inputTitle}>Last Name</Text>
      <TextInput
        style={styles.registerInput}
        value={lastName}
        onChangeText={handleLastName}
      />
    </View>
  );
};

export default RegisterName;

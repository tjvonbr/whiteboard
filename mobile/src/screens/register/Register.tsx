import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import RegisterName from "./components/RegisterName";
import RegisterEmail from "./components/RegisterEmail";
import RegisterPassword from "./components/RegisterPassword";
import { styles } from "./styles/RegisterStyles";
import { colors } from "../../styles/colors";

const Register = ({ navigation }) => {
  const [step, setStep] = React.useState(1);
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFirstName = firstName => setFirstName(firstName);
  const handleLastName = lastName => setLastName(lastName);
  const handleEmail = email => setEmail(email);
  const handlePassword = password => setPassword(password);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <RegisterName name={firstName} handleName={handleFirstName} />;
      case 2:
        return <RegisterEmail />;
      case 3:
        return <RegisterPassword />;
      default:
        return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderStep()}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={nextStep}>
          <Text style={styles.btnTextPrimary}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btnTextSecondary}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

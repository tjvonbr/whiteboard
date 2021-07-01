import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RegisterName from "./components/RegisterName";
import RegisterEmail from "./components/RegisterEmail";
import RegisterPassword from "./components/RegisterPassword";
import BackButton from "../../components/buttons/BackButton";
import ExitButton from "../../components/buttons/ExitButton";
import { styles } from "./styles/RegisterStyles";

const Register = ({ navigation }) => {
  const [step, setStep] = React.useState(1);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidInput, setIsValidInput] = React.useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFirstName = firstName => setFirstName(firstName);
  const handleLastName = lastName => setLastName(lastName);
  const handleEmail = email => setEmail(email);
  const handlePassword = password => setPassword(password);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <RegisterName
            firstName={firstName}
            lastName={lastName}
            handleFirstName={handleFirstName}
            handleLastName={handleLastName}
          />
        );
      case 2:
        return <RegisterEmail email={email} handleEmail={handleEmail} />;
      case 3:
        return (
          <RegisterPassword
            password={password}
            handlePassword={handlePassword}
          />
        );
      default:
        return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}>
        <View style={styles.customHeader}>
          {step === 1 ? (
            <ExitButton handlePress={() => navigation.navigate("Landing")} />
          ) : (
            <BackButton handlePress={prevStep} />
          )}
        </View>
        {renderStep()}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btnPrimary]} onPress={nextStep}>
            <Text style={styles.btnTextPrimary}>
              {step != 3 ? "Continue" : "Submit"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => navigation.navigate("Login")}>
            <Text style={styles.btnTextSecondary}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

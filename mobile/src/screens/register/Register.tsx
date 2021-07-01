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
import { Auth } from "aws-amplify";
import { styles } from "./styles/RegisterStyles";

const Register = ({ navigation }) => {
  const [step, setStep] = React.useState(1);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isValidInput, setIsValidInput] = React.useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  async function signUp() {
    setIsLoading(true);
    try {
      const { user } = await Auth.signUp({
        username: email, // Email must be entered as username
        password,
        attributes: {
          given_name: firstName,
          family_name: lastName,
        },
      });
      setIsLoading(false);
      console.log("User info: ", user);
      navigation.navigate("Confirm", {
        email: user["username"],
      });
    } catch (error) {
      setIsLoading(false);
      console.log("error signing up:", error);
    }
  }

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
          <TouchableOpacity
            style={[styles.btnPrimary]}
            onPress={step != 3 ? nextStep : signUp}>
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

import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ExitButton from "../../components/buttons/ExitButton";
import { Auth } from "aws-amplify";
import { styles } from "./styles/RegisterStyles";

const ConfirmRegistration = ({ navigation, route }) => {
  const [code, setCode] = React.useState("");
  const { email } = route.params;

  const confirmSignUp = async () => {
    try {
      const confirmed = await Auth.confirmSignUp(email, code);

      if (confirmed) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  const handleConfirmation = (code: string): void => setCode(code);
  const toLanding = () => navigation.navigate("Landing");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}>
        <View style={styles.customHeader}>
          <ExitButton handlePress={toLanding} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Confirm Registration</Text>
          <Text style={styles.subtitle}>
            Check your email for your confirmation code!
          </Text>
          <Text style={styles.inputTitle}>Confirmation Code</Text>
          <TextInput
            style={styles.registerInput}
            value={code}
            onChangeText={handleConfirmation}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btnPrimary]} onPress={confirmSignUp}>
            <Text style={styles.btnTextPrimary}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConfirmRegistration;

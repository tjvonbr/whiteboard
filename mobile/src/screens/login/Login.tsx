import * as React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Auth } from "aws-amplify";
import ExitButton from "../../components/buttons/ExitButton";
import styles from "./styles/LoginStyles";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const toLanding = (): void => navigation.navigate("Landing");

  async function signIn() {
    setIsLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      setIsLoading(false);
      console.log("user logged in: ", user);
    } catch (error) {
      setIsLoading(false);
      console.log("error signing in", error);
    }
  }

  const handleEmail = (email: string): void => setEmail(email);
  const handlePassword = (password: string): void => setPassword(password);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardView}>
        <View style={styles.customHeader}>
          <ExitButton handlePress={toLanding} />
        </View>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Sign in to record your last workout or check your progress!
        </Text>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.registerInput}
          value={email}
          onChangeText={handleEmail}
          returnKeyType={"next"}
          autoCapitalize="none"
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.registerInput}
          value={password}
          onChangeText={handlePassword}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btnPrimary]} onPress={signIn}>
            {isLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text style={styles.btnTextPrimary}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

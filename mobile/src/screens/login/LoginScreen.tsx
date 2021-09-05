import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import ExitButton from "../../components/buttons/ExitButton";
import styles from "./styles/LoginStyles";
import { useAuth } from "../../context/auth";
import { colors } from "../../styles/colors";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn, isLoading } = useAuth();

  const handleEmail = (email: string): void => setEmail(email);
  const handlePassword = (password: string): void => setPassword(password);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardView}>
        <View style={styles.customHeader}>
          <ExitButton handlePress={() => navigation.navigate("Landing")} />
        </View>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Sign in to record your last workout or check your progress!
        </Text>
        <Text style={styles.inputTitle}>Email</Text>
        <CustomInput
          style={styles.registerInput}
          value={email}
          onChangeText={handleEmail}
          returnKeyType={"next"}
          autoCapitalize="none"
        />
        <Text style={styles.inputTitle}>Password</Text>
        <CustomInput
          style={styles.registerInput}
          value={password}
          onChangeText={handlePassword}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <View style={styles.btnContainer}>
          <CustomButton
            backgroundColor={colors.primaryPurple}
            btnText={"Login"}
            color={colors.white}
            handlePress={() => signIn(email, password)}
            width={"100%"}
            isLoading={isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableNativeFeedbackBase,
  View,
} from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/CustomInput";
import ExitButton from "../../components/buttons/ExitButton";
import styles from "./styles/LoginStyles";
import { useAuth } from "../../context/auth";
import { colors } from "../../styles/colors";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn, isLoading } = useAuth();

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
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Email</Text>
                <CustomInput
                  style={styles.registerInput}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  returnKeyType={"next"}
                  autoCapitalize="none"
                />
                {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Password</Text>
                <CustomInput
                  style={styles.registerInput}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.btnContainer}>
                <CustomButton
                  backgroundColor={
                    isValid ? colors.primaryPurple : colors.purpleShadow
                  }
                  btnText={"Login"}
                  color={colors.white}
                  handlePress={handleSubmit}
                  width={"100%"}
                  isLoading={isLoading}
                  isDisabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default LoginScreen;

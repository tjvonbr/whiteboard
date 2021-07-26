import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/auth";
import styles from "./ProfileStyles";

const ProfileScreen = ({ navigation }) => {
  const { signOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.btnSecondary} onPress={signOut}>
          <Text style={styles.btnTextSecondary}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

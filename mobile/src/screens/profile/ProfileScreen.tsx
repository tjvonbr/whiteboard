import * as React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MenuItem from "./components/MenuItem";
import { useAuth } from "../../context/auth";
import styles from "./ProfileStyles";

const ProfileScreen = ({ navigation }) => {
  const { signOut } = useAuth();

  const renderItem = ({ item, index }) => {
    const { title, subtitle } = item;

    return (
      <MenuItem
        index={index}
        title={title}
        subtitle={subtitle}
        handlePress={() => navigation.navigate(title)}
      />
    );
  };

  const profileDirectory = [
    {
      id: 1,
      title: "Exercises",
      subtitle: "Add new exercises for your workouts",
    },
    {
      id: 2,
      title: "Routines",
      subtitle: "Add, edit, or delete routines",
    },
    {
      id: 3,
      title: "Workouts",
      subtitle: "Manage your previous workouts",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.userName}>Trevor Von Bruenchenhein</Text>
        <View style={{ marginVertical: 20 }}>
          <FlatList
            data={profileDirectory}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <TouchableOpacity style={styles.btnSecondary} onPress={signOut}>
          <Text style={styles.btnTextSecondary}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

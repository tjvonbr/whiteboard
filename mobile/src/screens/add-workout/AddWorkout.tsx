import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ExercisePicker from "../../components/modals/ExercisePicker";
import { format } from "date-fns";
import styles from "./AddWorkoutStyles";

const Dashboard = ({ navigation }) => {
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );

  const [description, setDescription] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  const handleName = (name: string) => setName(name);
  const handleDescription = (text: string) => setDescription(text);

  const openModal = () => setIsVisible(true);
  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.title}
          value={name}
          onChangeText={handleName}
        />
        <View style={styles.section}>
          <Text style={styles.subtitle}>Description</Text>
          <TextInput
            style={styles.description}
            value={description}
            onChangeText={handleDescription}
            placeholder={"Enter a description (optional)"}
            multiline={true}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Exercises</Text>
          <TouchableOpacity style={styles.btnPrimary} onPress={openModal}>
            <Text style={styles.btnTextPrimary}>Add Exercise</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ExercisePicker isVisible={isVisible} closeModal={closeModal} />
    </SafeAreaView>
  );
};

export default Dashboard;

import * as React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { format } from "date-fns";
import styles from "./AddWorkoutStyles";

const Dashboard = ({ navigation }) => {
  const [name, setName] = React.useState(
    "New Workout " + format(new Date(), "M/d/y"),
  );
  const [description, setDescription] = React.useState("");

  const handleName = (name: string) => setName(name);
  const handleDescription = (text: string) => setDescription(text);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput value={name} onChangeText={handleName} />
        <TextInput
          value={description}
          onChangeText={handleDescription}
          placeholder={"Enter a description"}
          multiline={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

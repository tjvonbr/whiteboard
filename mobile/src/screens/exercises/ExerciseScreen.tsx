import * as React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import ExerciseItem from "./components/ExerciseItem";
import { addExercises } from "./ExerciseRequest";
import { useAuth } from "../../context/auth";
import styles from "./ExerciseStyles";

const ExerciseScreen = () => {
  const [exercises, setExercises] = React.useState([]);

  const { user } = useAuth();

  React.useEffect(() => {});

  const renderItem = ({ item }) => {
    const { name } = item;

    return <ExerciseItem name={name} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={exercises}
          extraData={exercises}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExerciseScreen;

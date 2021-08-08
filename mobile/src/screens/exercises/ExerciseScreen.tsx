import * as React from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import AddExerciseModal from "./components/AddExerciseModal";
import ExerciseAlpha from "./components/ExerciseAlpha";
import ExerciseItem from "./components/ExerciseItem";
import { fetchExercises } from "./ExerciseRequests";
import { useAuth } from "../../context/auth";
import styles from "./ExerciseStyles";

const ExerciseScreen = ({ navigation }) => {
  const [exercises, setExercises] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const { user } = useAuth();

  React.useEffect(() => {
    const fetchUserExercises = async () => {
      setIsLoading(true);

      const response: any = await fetchExercises(user.userId);
      const myExercises = response.data?.listExercises?.items;

      myExercises.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      setExercises(myExercises);
      setIsLoading(false);
    };

    fetchUserExercises();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => setIsVisible(true)} />
      ),
    });
  }, [navigation]);

  const alphaMap = {};

  exercises.forEach(exercise => {
    let firstLetter = exercise.name[0];

    if (!alphaMap[firstLetter]) {
      alphaMap[firstLetter] = [exercise];
    } else {
      alphaMap[firstLetter].push(exercise);
    }
  });

  const hideModal = () => setIsVisible(false);

  const renderExercise = ({ item, index }) => {
    return <ExerciseItem item={item} index={index} />;
  };

  const renderExerciseAlpha = ({ item, index }) => (
    <ExerciseAlpha alpha={item} index={index} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color="black" size="small" />
        </View>
      ) : exercises.length > 0 ? (
        <View
          style={{
            flex: 1,
            width: "100%",
          }}>
          <FlatList
            data={Object.entries(alphaMap)}
            extraData={exercises}
            renderItem={renderExercise}
          />
          <View style={styles.alphaNavigator}>
            <FlatList
              data={Object.keys(alphaMap)}
              renderItem={renderExerciseAlpha}
            />
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>You haven't created any exercises yet!</Text>
        </View>
      )}
      <AddExerciseModal isVisible={isVisible} closeModal={hideModal} />
    </SafeAreaView>
  );
};

export default ExerciseScreen;

import * as React from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import AddExerciseModal from "./components/AddExerciseModal";
import ExerciseActionModal from "./components/ExerciseActionModal";
import ExerciseAlpha from "./components/ExerciseAlpha";
import ExerciseItem from "./components/ExerciseItem";
import FullPageLoading from "../../components/misc/FullPageLoading";
import {
  addExercise,
  fetchExercises,
  removeExercise,
} from "./ExerciseRequests";
import { useAuth } from "../../context/auth";
import styles from "./ExerciseStyles";
import { colors } from "../../styles/colors";

const ExercisesScreen = ({ navigation }) => {
  const [exercises, setExercises] = React.useState([]);
  const [selectedExercise, setSelectedExercise] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isAddVisible, setIsAddVisible] = React.useState(false);
  const [isEditVisible, setIsEditVisible] = React.useState(false);

  const flatListRef: any = React.createRef();

  const {
    user: { userId },
  } = useAuth();

  React.useEffect(() => {
    const fetchUserExercises = async () => {
      setIsLoading(true);

      const response: any = await fetchExercises(userId);
      const myExercises = response?.data?.listExercises?.items;

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
        <Button title="Add" onPress={() => setIsAddVisible(true)} />
      ),
    });
  }, [navigation]);

  // Handle navigation to screen for individual exercise
  const navToExercise = exercise =>
    navigation.navigate("Exercise", {
      data: exercise,
    });

  // Scroll to letter after pressing proper alpha button
  const scrollToAlpha = index =>
    flatListRef?.current.scrollToIndex({ animated: true, index });

  // Submits new workout for user
  const submitExercise = async (name, description) => {
    const exercise = { userId, name, description };

    const response = await addExercise(exercise);
    const newExercise: any = response.data.createExercise;

    if (!response) {
      console.log("Something went wrong!");
    }

    setExercises(prevState => [...prevState, newExercise]);
    hideModal();
  };

  const deleteExercise = async exercise => {
    const id = { id: exercise.id };
    await removeExercise(id);

    const newExercises = exercises.filter(e => e.id! !== exercise.id);

    hideEditModal();
    setExercises(newExercises);
  };

  // Map used for alpha navigator and data source for list of exercises
  const alphaMap = {};

  exercises.forEach(exercise => {
    let firstLetter = exercise.name[0];

    if (!alphaMap[firstLetter]) {
      alphaMap[firstLetter] = [exercise];
    } else {
      alphaMap[firstLetter].push(exercise);
    }
  });

  const showEditModal = exercise => {
    setSelectedExercise(exercise);

    setIsEditVisible(true);
  };
  const hideEditModal = () => setIsEditVisible(false);

  const hideModal = () => setIsAddVisible(false);

  const renderExercise = ({ item, index }) => {
    return (
      <ExerciseItem
        item={item}
        handlePress={navToExercise}
        handleLongPress={showEditModal}
      />
    );
  };

  const renderExerciseAlpha = ({ item, index }) => {
    return (
      <ExerciseAlpha alpha={item} index={index} handleScroll={scrollToAlpha} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <FullPageLoading color={colors.black} size={"small"} />
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
            ref={flatListRef}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.alphaNavigator}>
            <FlatList
              data={Object.keys(alphaMap)}
              renderItem={renderExerciseAlpha}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>You haven't created any exercises yet!</Text>
        </View>
      )}
      <AddExerciseModal
        closeModal={hideModal}
        addExercise={submitExercise}
        isVisible={isAddVisible}
      />
      <ExerciseActionModal
        closeModal={hideEditModal}
        deleteExercise={deleteExercise}
        isVisible={isEditVisible}
        exercise={selectedExercise}
      />
    </SafeAreaView>
  );
};

export default ExercisesScreen;

import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import DoneButton from "../buttons/DoneButton";
import ExerciseAlpha from "../../screens/exercises/components/ExerciseAlpha";
import ExerciseItem from "../../screens/exercises/components/ExerciseItem";
import ExitButton from "../buttons/ExitButton";
import FullPageLoading from "../misc/FullPageLoading";
import Modal from "react-native-modal";
import { fetchExercises } from "../../screens/exercises/ExerciseRequests";
import { useAuth } from "../../context/auth";
import { colors } from "../../styles/colors";

type ExercisePickerProps = {
  isVisible: boolean;
  closeModal: () => void;
  selected: Map<any, any>;
  handleSelect: (id: number) => void;
};

const ExercisePicker = ({
  isVisible,
  closeModal,
  selected,
  handleSelect,
}: ExercisePickerProps) => {
  const {
    user: { userId },
  } = useAuth();

  const [exercises, setExercises] = React.useState([]);
  const [isExerciseSelected, setIsExerciseSelected] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const flatListRef: any = React.createRef();

  React.useEffect(() => {
    const fetchUserExercises = async () => {
      setIsLoading(true);

      const response: any = await fetchExercises(userId);
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

  React.useEffect(() => {
    isTrue();
  }, [selected]);

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

  const clearAndClose = () => {
    // Clears the previously selected exercises
    closeModal();
  };

  const isTrue = () => {
    const selectedvalues = Array.from(selected.values());

    selectedvalues.includes(true)
      ? setIsExerciseSelected(true)
      : setIsExerciseSelected(false);
  };

  // Scroll to letter after pressing proper alpha button
  const scrollToAlpha = index =>
    flatListRef?.current.scrollToIndex({ animated: true, index });

  const renderExercise = ({ item }) => {
    return <ExerciseItem item={item} handlePress={handleSelect} />;
  };

  const renderExerciseAlpha = ({ item, index }) => {
    return (
      <ExerciseAlpha alpha={item} index={index} handleScroll={scrollToAlpha} />
    );
  };

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <FullPageLoading color={colors.black} size={"small"} />
        ) : exercises.length > 0 ? (
          <View style={{ flex: 1, width: "100%" }}>
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
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: colors.white,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  alphaNavigator: {
    width: 20,
    position: "absolute",
    top: "50%",
    right: "0%",
    // TODO: GET ITEM LAYOUT
    transform: [
      {
        translateY: -50,
      },
    ],
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  headerView: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    borderBottomColor: colors.inputBorderGray,
    borderBottomWidth: 1,
  },
  exitBtnContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: "600",
    color: colors.black,
  },
  doneBtnContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExercisePicker;

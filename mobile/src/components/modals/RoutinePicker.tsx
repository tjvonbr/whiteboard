import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ExerciseAlpha from "../../screens/exercises/components/ExerciseAlpha";
import FullPageLoading from "../misc/FullPageLoading";
import Modal from "react-native-modal";
import RoutinePickerItem from "./RoutinePickerItem";
import { fetchRoutines } from "../../screens/routines/RoutinesRequests";
import { useAuth } from "../../context/auth";
import { colors } from "../../styles/colors";

const RoutinePicker = ({ isVisible, closeModal, selected, selectRoutine }) => {
  const [routines, setRoutines] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const routineListRef: any = React.createRef();

  const {
    user: { userId },
  } = useAuth();

  React.useEffect(() => {
    const fetchUserRoutines = async () => {
      setIsLoading(true);

      const response: any = await fetchRoutines(userId);
      const myRoutines = response.data?.listRoutines?.items;

      myRoutines.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      setRoutines(myRoutines);
      setIsLoading(false);
    };

    fetchUserRoutines();
  }, []);

  // Map used for alpha navigator and data source for list of exercises
  const alphaMap = {};

  routines.forEach(routine => {
    let firstLetter = routine.name[0];

    if (!alphaMap[firstLetter]) {
      alphaMap[firstLetter] = [routine];
    } else {
      alphaMap[firstLetter].push(routine);
    }
  });

  const renderRoutine = ({ item }) => {
    return (
      <RoutinePickerItem
        item={item}
        handlePress={selectRoutine}
        closeModal={closeModal}
      />
    );
  };

  const renderExerciseAlpha = ({ item, index }) => {
    return (
      <ExerciseAlpha alpha={item} index={index} handleScroll={scrollToAlpha} />
    );
  };

  const scrollToAlpha = index =>
    routineListRef?.current.scrollToIndex({ animated: true, index });

  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <FullPageLoading color={colors.black} size={"small"} />
        ) : routines.length > 0 ? (
          <View style={{ flex: 1, width: "100%" }}>
            <FlatList
              data={Object.entries(alphaMap)}
              extraData={routines}
              renderItem={renderRoutine}
              ref={routineListRef}
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

export default RoutinePicker;

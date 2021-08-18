import * as React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import BackButton from "../../components/buttons/BackButton";
import FullPageLoading from "../../components/misc/FullPageLoading";
import NavBar from "../../components/navigation/NavBar";
import SortButton from "./components/SortButton";
import WorkoutItem from "./components/WorkoutItem";
import { fetchWorkouts } from "./WorkoutsRequests";
import { useAuth } from "../../context/auth";
import styles from "./WorkoutsStyles";
import { colors } from "../../styles/colors";

enum SortType {
  ALPHABETICAL = "Name",
  BY_DATE = "Date",
}

const sortTypeOptions = [
  { value: SortType.ALPHABETICAL, label: "Name" },
  { value: SortType.BY_DATE, label: "Date" },
];

const WorkoutsScreen = () => {
  const [workouts, setWorkouts] = React.useState([]);
  const [sortType, setSortType] = React.useState(SortType.BY_DATE);
  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    user: { userId },
  } = useAuth();

  const sortAlphabetically = workouts => {
    const alphaSort = workouts.sort((a, b) => {
      if (a.score < b.score) return -1;
      if (a.score > b.score) return 1;
      return 0;
    });

    return alphaSort;
  };

  const sortByDate = workouts => {
    const dateSort = workouts.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });

    return dateSort;
  };

  const renderWorkout = ({ item }) => <WorkoutItem workout={item} />;

  React.useEffect(() => {
    const listWorkouts = async () => {
      setIsLoading(true);

      const unsortedWorkouts: any = await fetchWorkouts(userId);

      setWorkouts(unsortedWorkouts);
      setIsLoading(false);
    };

    listWorkouts();
  }, []);

  React.useEffect(() => {
    let sortedWorkouts;

    switch (sortType) {
      case SortType.ALPHABETICAL:
        sortedWorkouts = sortAlphabetically(workouts);
        setWorkouts(sortedWorkouts);
      case SortType.BY_DATE:
        sortedWorkouts = sortByDate(workouts);
        setWorkouts(sortedWorkouts);
      default:
        return;
    }
  }, [sortType]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <FullPageLoading color={colors.black} size="small" />
      ) : (
        <View style={styles.innerContainer}>
          <SortButton
            sortType={sortType}
            items={sortTypeOptions}
            setValue={setSortType}
            open={isDropdownVisible}
            setOpen={setIsDropdownVisible}
          />
          <FlatList
            style={{ flex: 1, width: "100%" }}
            data={workouts}
            extraData={workouts}
            renderItem={renderWorkout}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default WorkoutsScreen;

import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { fetchWorkouts } from "./WorkoutsRequests";
import { useAuth } from "../../context/auth";
import styles from "./WorkoutsStyles";

enum SortType {
  ALPHABETICAL,
  BY_DATE,
}

const WorkoutsScreen = () => {
  const [workouts, setWorkouts] = React.useState([]);
  const [filter, setFilter] = React.useState(SortType.ALPHABETICAL);

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
      if (a.createdAt < b.createdAt) return -1;
      if (a.createdAt > b.createdAt) return 1;
      return 0;
    });

    return dateSort;
  };

  React.useEffect(() => {
    const listWorkouts = async () => {
      const unsortedWorkouts: any = await fetchWorkouts(userId);
      let sortedWorkouts;

      switch (filter) {
        case SortType.ALPHABETICAL:
          sortedWorkouts = sortAlphabetically(unsortedWorkouts);
          setWorkouts(sortedWorkouts);
        case SortType.BY_DATE:
          sortedWorkouts = sortByDate(unsortedWorkouts);
          sortedWorkouts(sortedWorkouts);
        default:
          return;
      }
    };

    listWorkouts();
  }, [filter]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Workouts</Text>
    </SafeAreaView>
  );
};

export default WorkoutsScreen;

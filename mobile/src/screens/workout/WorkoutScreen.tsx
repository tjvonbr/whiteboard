import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { format, parseISO } from "date-fns";
import { colors } from "../../styles/colors";

const WorkoutScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Summary</Text>
          <View style={styles.summaryDetailContainer}>
            <Text style={styles.summaryCategory}>Name</Text>
            <Text style={styles.summaryDetail}>{route.params.routineName}</Text>
          </View>
          <View style={styles.summaryDetailContainer}>
            <Text style={styles.summaryCategory}>Created at</Text>
            <Text style={styles.summaryDetail}>
              {format(parseISO(route.params.routineCreatedAt), "MM/dd/yyyy")}
            </Text>
          </View>
          <View style={styles.summaryDetailContainer}>
            <Text style={styles.summaryCategory}>Workout type</Text>
            <Text style={styles.summaryDetail}>
              {route.params.routineWorkoutType}
            </Text>
          </View>
          <View style={styles.summaryDetailContainer}>
            <Text style={styles.summaryCategory}>Scoring type</Text>
            <Text style={styles.summaryDetail}>
              {route.params.routineScoringType}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>History</Text>
          <View style={styles.summaryDetailContainer}>
            <Text style={styles.summaryCategory}>Most recent score</Text>
            <Text style={styles.summaryDetail}>{route.params.score}</Text>
          </View>
          <View style={styles.summaryDetailContainer}>
            <Text style={styles.summaryCategory}>Best Score</Text>
            <Text style={styles.summaryDetail}>{route.params.score}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    width: "90%",
  },
  section: {
    marginTop: 20,
    alignItems: "center",
  },
  sectionHeader: {
    width: "100%",
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "600",
    fontSize: 21,
    color: colors.black,
  },
  summaryDetailContainer: {
    width: "90%",
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  summaryCategory: {
    fontWeight: "500",
    fontSize: 15,
    color: "#A9A9A9",
  },
  summaryDetail: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.black,
  },
});

export default WorkoutScreen;

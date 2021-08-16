import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./RoutineStyles";

const RoutineScreen = ({ navigation, route }) => {
  const { name, createdAt, workoutType, scoringType } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.overviewContainer}>
            <View style={styles.overviewDetail}>
              <Text style={styles.overViewDetailTitle}>Workout Type</Text>
              <Text>{workoutType}</Text>
            </View>
            <View style={styles.overviewDetail}>
              <Text style={styles.overViewDetailTitle}>Scoring Style</Text>
              <Text>{scoringType}</Text>
            </View>
            <View style={styles.overviewDetail}>
              <Text style={styles.overViewDetailTitle}>Detail</Text>
            </View>
          </View>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={styles.sectionSubtitle}>Description</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitle}>Performance</Text>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
              <Text style={styles.sectionSubtitle}>Best performance</Text>
              <TouchableOpacity
                style={styles.performanceWidget}></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RoutineScreen;

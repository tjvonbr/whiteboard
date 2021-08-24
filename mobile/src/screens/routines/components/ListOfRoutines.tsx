import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AlphaItem from "../../../components/lists/AlphaItem";
import RoutineListItem from "./RoutineListItem";

const ListOfRoutines = ({
  routines,
  showDelete,
  setSelectedRoutine,
  handlePress,
}) => {
  const routineListRef: any = React.createRef();

  const scrollToAlpha = index =>
    routineListRef?.current?.scrollToIndex({ animated: true, index });

  const renderRoutine = ({ item }) => {
    return (
      <RoutineListItem
        item={item}
        handlePress={handlePress}
        setSelectedRoutine={setSelectedRoutine}
        showDelete={showDelete}
      />
    );
  };

  const renderRoutineAlpha = ({ item, index }) => {
    return (
      <AlphaItem alpha={item} index={index} handleScroll={scrollToAlpha} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.entries(routines)}
        renderItem={renderRoutine}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.alphaNavigator}>
        <FlatList
          data={Object.keys(routines)}
          renderItem={renderRoutineAlpha}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
});

export default ListOfRoutines;

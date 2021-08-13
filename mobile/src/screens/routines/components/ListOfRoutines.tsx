import * as React from "react";
import { FlatList, Text, View } from "react-native";
import RoutineListItem from "./RoutineListItem";

const ListOfRoutines = ({ routines }) => {
  const renderRoutine = ({ item }) => (
    <RoutineListItem
      item={item}
      handlePress={() => console.log("Press")}
      handleLongPress={() => console.log("Long press")}
    />
  );

  return (
    <View>
      <FlatList
        data={routines}
        renderItem={renderRoutine}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListOfRoutines;

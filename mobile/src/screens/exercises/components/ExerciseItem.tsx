import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";

type ExerciseItemProps = {
  name: string;
};

const ExerciseItem = ({ name }: ExerciseItemProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default ExerciseItem;

import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MoreButton from "../../../components/buttons/MoreButton";
import InputModal from "./InputModal";
import MoreModal from "../components/MoreModal";
import styles from "../AddWorkoutStyles";

type ExerciseDetailProps = {
  name: string;
};

const ExerciseDetail = ({ name }: ExerciseDetailProps) => {
  const [description, setDescription] = React.useState(null);
  const [sets, setSets] = React.useState(1);
  const [weight, setWeight] = React.useState(null);
  const [reps, setReps] = React.useState(null);
  const [moreModalIsVisible, setMoreModalIsVisible] = React.useState(false);
  const [inputModalIsVisible, setInputModalIsVisible] = React.useState(false);

  // Toggle modals
  const toggleMoreModal = () => setMoreModalIsVisible(!moreModalIsVisible);
  const toggleInputModal = () => setInputModalIsVisible(!inputModalIsVisible);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exerciseInputContainer}>
        <View style={styles.exerciseTitleContainer}>
          <Text style={styles.exerciseTitle}>{name}</Text>
          <MoreButton handlePress={toggleMoreModal} />
        </View>
        <TouchableWithoutFeedback onPress={toggleInputModal}>
          <Text>
            {description === null
              ? "Enter a description (optional)"
              : description}
          </Text>
        </TouchableWithoutFeedback>
        <View style={styles.setInputSectionContainer}>
          <View style={styles.setInputContainer}>
            <Text style={styles.setInputTitle}>Weight</Text>
            <TextInput
              style={styles.setInput}
              value={weight}
              onChangeText={(weight: string) => setWeight(weight)}
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
          <View style={styles.setInputContainer}>
            <Text style={styles.setInputTitle}>Reps</Text>
            <TextInput
              style={styles.setInput}
              value={reps}
              onChangeText={(reps: string) => setReps(reps)}
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
        </View>
      </View>
      <MoreModal isVisible={moreModalIsVisible} closeModal={toggleMoreModal} />
      <InputModal
        isVisible={inputModalIsVisible}
        closeModal={toggleInputModal}
      />
    </SafeAreaView>
  );
};

export default ExerciseDetail;

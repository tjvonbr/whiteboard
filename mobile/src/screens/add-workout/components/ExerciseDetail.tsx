import * as React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CustomInput from "../../../components/CustomInput";
import MoreButton from "../../../components/buttons/MoreButton";
import InputModal from "./InputModal";
import MoreModal from "../components/MoreModal";
import styles from "../AddWorkoutStyles";

type ExerciseDetailProps = {
  name: string;
};

const ExerciseDetail = ({ name }: ExerciseDetailProps) => {
  const [instructions, setInstructions] = React.useState(null);
  const [sets, setSets] = React.useState(1);
  const [weight, setWeight] = React.useState(null);
  const [reps, setReps] = React.useState(null);
  const [moreModalIsVisible, setMoreModalIsVisible] = React.useState(false);
  const [inputModalIsVisible, setInputModalIsVisible] = React.useState(false);

  // Toggle modals
  const toggleMoreModal = () => setMoreModalIsVisible(!moreModalIsVisible);
  const toggleInputModal = () => setInputModalIsVisible(!inputModalIsVisible);

  // Handle change text
  const handleInstructions = (text: string) => setInstructions(text);
  const handleWeight = (weight: string) => setWeight(weight);
  const handleReps = (reps: string) => setReps(reps);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exerciseInputContainer}>
        <View style={styles.exerciseTitleContainer}>
          <Text style={styles.exerciseTitle}>{name}</Text>
          <MoreButton handlePress={toggleMoreModal} />
        </View>
        <TouchableOpacity
          style={styles.fauxInputButton}
          onPress={toggleInputModal}>
          <Text style={styles.fauxInputBtnText} numberOfLines={1}>
            {instructions ? instructions : "Enter a description..."}
          </Text>
        </TouchableOpacity>
        <View style={styles.setInputSectionContainer}>
          <View style={styles.setInputContainer}>
            <Text style={styles.setInputTitle}>Weight</Text>
            <CustomInput
              style={styles.setInput}
              value={weight}
              onChangeText={handleWeight}
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
          <View style={styles.setInputContainer}>
            <Text style={styles.setInputTitle}>Reps</Text>
            <CustomInput
              style={styles.setInput}
              value={reps}
              onChangeText={handleReps}
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
        instructions={instructions}
        handleInstructions={handleInstructions}
      />
    </SafeAreaView>
  );
};

export default ExerciseDetail;

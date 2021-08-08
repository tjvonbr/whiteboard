import { API } from "aws-amplify";
import { createExercise } from "../../graphql/mutations";
import { listExercises } from "../../graphql/queries";

export const fetchExercises = async userId => {
  try {
    const exercises = await API.graphql({
      query: listExercises,
      variables: { input: userId },
    });

    return exercises;
  } catch (error) {
    console.log("error fetching exercises: ", error);
  }
};

export const addExercise = async exercise => {
  try {
    const newExercise = await API.graphql({
      query: createExercise,
      variables: { input: exercise },
    });

    console.log("new exercise created: ", newExercise);
    return newExercise;
  } catch (error) {
    console.log(error.errors);
  }
};

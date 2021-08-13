import { API } from "aws-amplify";
import { createExercise, deleteExercise } from "../../graphql/mutations";
import { listExercises } from "../../graphql/queries";

export const fetchExercises = async userId => {
  try {
    const exercises = await API.graphql({
      query: listExercises,
      variables: { input: userId },
    });

    return exercises;
  } catch (error) {
    console.log("error fetching exercises: ", error.errors);
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

export const removeExercise = async exercise => {
  try {
    const result = await API.graphql({
      query: deleteExercise,
      variables: { input: exercise },
    });

    console.log("exercise deleted: ", result);
    return result;
  } catch (error) {
    console.log(error.errors);
  }
};

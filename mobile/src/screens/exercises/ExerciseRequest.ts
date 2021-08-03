import { API } from "aws-amplify";
import { createExercise } from "../../graphql/mutations";
import { listExercises } from "../../graphql/queries";

export const fetchExercises = async () => {
  try {
    const exercises = await API.graphql({
      query: listExercises,
    });

    return exercises;
  } catch (error) {
    console.log("error fetching exercises: ", error);
  }
};

export const addExercises = async exercise => {
  try {
    const newExercise = await API.graphql({
      query: createExercise,
      variables: { input: exercise },
    });

    console.log("new exercise created: ", newExercise);
  } catch (error) {
    console.log(error.errors);
  }
};

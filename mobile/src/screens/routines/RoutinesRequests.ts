import { API } from "aws-amplify";
import {
  createRoutine,
  batchAdd,
  deleteRoutine,
} from "../../graphql/mutations";
import { listRoutines } from "../../graphql/queries";

export const fetchRoutines = async userId => {
  try {
    const routines = await API.graphql({
      query: listRoutines,
      variables: { input: userId },
    });

    return routines;
  } catch (error) {
    console.log("error fetching routines: ", error);
  }
};

export const addRoutine = async routine => {
  try {
    const newRoutine = await API.graphql({
      query: createRoutine,
      variables: { input: routine },
    });

    console.log("new routine created: ", newRoutine);
    return newRoutine;
  } catch (error) {
    console.log("error adding routine: ", error.errors);
  }
};

export const removeRoutine = async routine => {
  try {
    const deletedRoutine = await API.graphql({
      query: deleteRoutine,
      variables: { input: routine },
    });

    console.log("routine deleted: ", deletedRoutine);
    return deletedRoutine;
  } catch (error) {
    console.log(error.errors);
  }
};

export const addRoutineExercises = async routineExercises => {
  try {
    const routineExercise = await API.graphql({
      query: batchAdd,
      variables: { exercises: routineExercises },
    });

    console.log("routine exercise created: ", routineExercise);
    return routineExercise;
  } catch (error) {
    console.log(error.errors);
  }
};

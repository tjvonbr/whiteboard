import { API } from "aws-amplify";
import { createWorkout } from "../../graphql/mutations";
import { listWorkouts } from "../../graphql/queries";

export const fetchWorkouts = async (userId, routineId) => {
  try {
    const workouts = await API.graphql({
      query: listWorkouts,
      variables: { input: { userId, routineId } },
    });

    return workouts;
  } catch (error) {
    console.log("error fetching workouts: ", error.errors);
  }
};

export const addWorkout = async workout => {
  try {
    const newWorkout = await API.graphql({
      query: createWorkout,
      variables: { input: workout },
    });

    console.log("new workout created: ", newWorkout);
    return newWorkout;
  } catch (error) {
    console.log("error creating workout: ", error.errors);
  }
};

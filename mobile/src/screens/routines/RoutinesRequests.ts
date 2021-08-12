import { API } from "aws-amplify";
import { createRoutine } from "../../graphql/mutations";
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

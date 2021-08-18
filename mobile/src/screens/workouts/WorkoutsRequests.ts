import API from "@aws-amplify/api";
import { listWorkouts } from "../../graphql/queries";

export const fetchWorkouts = async userId => {
  try {
    const response: any = await API.graphql({
      query: listWorkouts,
      variables: { input: userId },
    });

    return response?.data?.listWorkouts?.items;
  } catch (error) {
    console.log("error fetching workouts: ", error.errors);
  }
};

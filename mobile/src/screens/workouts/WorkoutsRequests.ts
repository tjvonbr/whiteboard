import API from "@aws-amplify/api";
import { listWorkouts } from "../../graphql/queries";

export const fetchWorkouts = async userId => {
  try {
    const response: any = await API.graphql({
      query: listWorkouts,
      variables: { input: userId },
    });

    console.log(response.data.listWorkouts.items);
    return response;
  } catch (error) {
    console.log("error fetching workouts: ", error.errors);
  }
};

import { API } from "aws-amplify";
import { searchWorkouts } from "../../graphql/queries";

export const fetchWorkoutsByDate = async date => {
  try {
    const workouts: any = await API.graphql({
      query: searchWorkouts,
      variables: { filter: { createdAt: { match: date } } },
    });

    return workouts?.data?.searchWorkouts.items;
  } catch (error) {
    console.log("error fetching workouts: ", error.errors);
  }
};

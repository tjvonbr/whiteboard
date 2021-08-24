import API from "@aws-amplify/api";
import { listWorkouts } from "../../graphql/queries";

export async function fetchWorkoutsFor(userId, timePeriod) {
  console.log(timePeriod);
  try {
    const response: any = await API.graphql({
      query: listWorkouts,
      variables: {
        input: {
          userId,
          between: timePeriod,
        },
      },
    });

    console.log(response?.data?.listWorkouts?.items);
    return response;
  } catch (error) {
    console.log("error fetching workouts: ", error.errors);
  }
}

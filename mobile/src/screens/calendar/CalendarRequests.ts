import API from "@aws-amplify/api";
import { listWorkouts } from "../../graphql/queries";

export async function fetchWorkoutsFor(userId, timePeriod) {
  const filter = {
    and: [
      { userId: { eq: userId } },
      { createdAt: { between: [timePeriod[0], timePeriod[1]] } },
    ],
  };

  try {
    const response: any = await API.graphql({
      query: listWorkouts,
      variables: { filter: filter },
    });

    return response?.data?.listWorkouts?.items;
  } catch (error) {
    console.log("error fetching workouts: ", error.errors);
  }
}

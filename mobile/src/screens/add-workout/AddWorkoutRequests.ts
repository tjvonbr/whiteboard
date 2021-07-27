import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

const exerciseDetails = {
  userId: 1,
  name: "Push Press",
};

const newExercise = API.graphql({
  query: mutations.createExercise,
  variables: { input: exerciseDetails },
});

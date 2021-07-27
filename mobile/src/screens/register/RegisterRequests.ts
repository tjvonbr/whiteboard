import { API } from "aws-amplify";
import { createUser } from "../../graphql/mutations";

const upsertUser = async user => {
  try {
    await API.graphql({
      query: createUser,
      variables: user,
    });
    console.log("New contact created!");
  } catch (err) {
    console.log({ err });
  }
};

export { upsertUser };

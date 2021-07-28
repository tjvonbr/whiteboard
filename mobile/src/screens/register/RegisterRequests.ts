import { API } from "aws-amplify";
import { createUser } from "../../graphql/mutations";

const upsertUser = async user => {
  const { email, password, firstName, lastName } = user;

  const userInput = {
    email,
    password,
    firstName,
    lastName,
  };

  try {
    const newUser = await API.graphql({
      query: createUser,
      variables: { input: userInput },
    });

    console.log("new contact created: ", newUser);
    return newUser;
  } catch (err) {
    console.log(err.errors);
  }
};

export { upsertUser };

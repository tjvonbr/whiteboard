import * as React from "react";
import { API } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../graphql/queries";
import { Auth } from "aws-amplify";

type AuthContextData = {
  user: UserData;
  isIdle: boolean;
  isLoading: boolean;
  signUp(userDetails): Promise<any>;
  signIn(username, password): Promise<void>;
  signOut(): void;
};

type UserData = {
  jwt: string;
};

const initialAuthState = {
  firstName: null,
  lastName: null,
  userId: null,
  jwt: undefined,
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(initialAuthState);
  const [isIdle, setIsIdle] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const bootstrapAppData = async () => {
      const jwt = await AsyncStorage.getItem("@user");

      if (!jwt) {
        console.log("there was no auth data cached in async storage");
      } else {
        setUser({ ...user, jwt });
      }

      setIsIdle(false);
    };

    bootstrapAppData();
  }, []);

  const signUp = async userDetails => {
    const { email, password, firstName, lastName } = userDetails;

    setIsLoading(true);

    try {
      const { user } = await Auth.signUp({
        username: email, // Email must be entered as username
        password,
        attributes: {
          "custom:firstName": firstName,
          "custom:lastName": lastName,
        },
      });

      return user;
    } catch (error) {
      console.log("error signing up:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in
  const signIn = async (username, password) => {
    setIsLoading(true);

    try {
      await Auth.signIn(username, password);

      const currentUser = await Auth.currentUserInfo();
      const currentSession = await Auth.currentSession();
      const accessToken = currentSession.getAccessToken();
      const jwt = accessToken.getJwtToken();

      setUser({
        ...user,
        firstName: currentUser.attributes["custom:firstName"],
        lastName: currentUser.attributes["custom:lastName"],
        userId: currentUser.attributes.sub,
        jwt,
      });
    } catch (error) {
      console.log("there was a problem signing you in: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    setIsLoading(true);

    try {
      await Auth.signOut();

      setUser({ ...user, jwt: undefined });
      await AsyncStorage.removeItem("@user");
    } catch (error) {
      console.log("error signing out: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isIdle, isLoading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Set up access to AuthContext so components can subscribe
const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };

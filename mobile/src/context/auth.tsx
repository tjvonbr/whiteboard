import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Auth } from "aws-amplify";

type AuthContextData = {
  token?: string;
  isLoading: boolean;
  signIn(username, password): Promise<void>;
  signOut(): void;
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const bootstrapAppData = async () => {
      let authToken = null;

      try {
        authToken = await AsyncStorage.getItem("@token");
        setToken(authToken);
      } catch (error) {
        console.log("error setting token: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAppData();
  }, []);

  // Sign in
  const signIn = async (username, password) => {
    setIsLoading(true);
    try {
      const user = await Auth.signIn(username, password);

      setToken(user.signInUserSession.idToken.jwtToken);

      await AsyncStorage.setItem("@token", JSON.stringify(token));
    } catch (error) {
      console.log("error signing in", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      await Auth.signOut();
      setToken(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, isLoading, signIn, signOut }}>
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

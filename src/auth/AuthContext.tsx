import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useLogoutMutation } from "../generated/graphql";

type ContextProps = {
  isLoggedIn?: boolean;
  user?: string;
  setUser: (user: string) => void;
  clearUser: () => void;
};

const AuthContext = createContext({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [logout, { client }] = useLogoutMutation();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = await localStorage.getItem("token");

    if (token) {
      const { userId } = jwtDecode(token);
      setCurrentUser(userId);
    }
  };

  const setUser = async (token: string) => {
    const { userId } = jwtDecode(token);
    await localStorage.setItem("token", token);
    await client?.resetStore();
    setCurrentUser(userId);
  };

  const clearUser = async () => {
    await logout();
    await localStorage.removeItem("token");
    await client?.resetStore();
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        setUser,
        clearUser,
        isLoggedIn: Boolean(currentUser),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

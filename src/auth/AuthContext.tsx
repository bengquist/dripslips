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
  const [logout] = useLogoutMutation();

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/refresh_token", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();

      if (data.accessToken) {
        setUser(data.accessToken);
      }
    })();
  }, []);

  const setUser = async (token: string) => {
    const { userId } = jwtDecode(token);
    await localStorage.setItem("token", token);
    setCurrentUser(userId);
  };

  const clearUser = async () => {
    await logout();
    await localStorage.removeItem("token");
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

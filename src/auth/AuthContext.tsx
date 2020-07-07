import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  user: any;
  setUser: (user: any) => void;
  clearUser: () => void;
};

const AuthContext = createContext({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/refresh_token", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();

      await localStorage.setItem("token", data.accessToken);
      setCurrentUser(data.accessToken);
    })();
  }, []);

  const setUser = (token: string) => {
    const { userId } = jwtDecode(token);

    setCurrentUser(userId);
  };

  const clearUser = async () => {
    await localStorage.removeItem("token");
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user: currentUser, setUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

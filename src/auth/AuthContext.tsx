import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  user: any;
  setUser: (user: any) => void;
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

      console.log(data);
    })();
  }, []);

  const setUser = (token: string) => {
    const { userId } = jwtDecode(token);

    setCurrentUser(userId);
  };

  return (
    <AuthContext.Provider value={{ user: currentUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useState } from "react";

type ContextProps = {
  user: any;
  login: (user: any) => void;
};

const AuthContext = createContext({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState();

  const login = (user: any) => {
    console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

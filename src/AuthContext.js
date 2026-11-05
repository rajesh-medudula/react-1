import { createContext, useContext } from "react";

export const AuthContext = createContext({email: "", pass: "", isAuth: false});

export const useAuth = () => {
  return useContext(AuthContext);
}

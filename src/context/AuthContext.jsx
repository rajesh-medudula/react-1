import { AuthContext } from "./auth-context";
import { useEffect, useState } from "react";

export const AuthContextProvider = ({children}) => {

  const [authState, setAuthState] = useState("signup");
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("savedUser");

    return savedUser ? JSON.parse(savedUser) : { email: "", pass: "", isAuth: false };
  });

  const logout = () => {
    if (user.isAuth) {
      setUser({ email: "", pass: "", isAuth: false });
      setAuthState("login");
      setStatus(null);
    }
  }

  useEffect(() => {
    if (user.isAuth) {
      localStorage.setItem("savedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("savedUser");
    }
  }, [user]);


  return (<AuthContext.Provider value={{authState, setAuthState, user, setUser, status, setStatus, logout}}>
    {children}
  </AuthContext.Provider>)
}
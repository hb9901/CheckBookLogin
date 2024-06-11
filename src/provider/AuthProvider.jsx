import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logIn = ({ accessToken }) => {
    localStorage.setItem("accessToken", accessToken);

    setIsAuthenticated(true);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

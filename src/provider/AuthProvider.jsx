import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: "",
    avatar: "",
    nickname: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logIn = ({ userId, avatar, nickname, accessToken }) => {
    const newUserInfo = {
      userId,
      avatar,
      nickname,
    };
    localStorage.setItem("accessToken", accessToken);

    setIsAuthenticated(true);
    setUserInfo(newUserInfo);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ userInfo, isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

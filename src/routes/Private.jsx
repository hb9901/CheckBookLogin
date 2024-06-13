import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context";

function Private() {
  const { isAuthenticated } = useContext(AuthContext);
  const accessToken = localStorage.getItem("accessToken");

  if (!isAuthenticated || !accessToken) {
    alert("로그인이 필요한 기능입니다.");
    return <Navigate to="/login" />;
  }

  return <Layout />;
}

export default Private;

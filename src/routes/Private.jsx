import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import useUser from "../hooks/useUser";

function Private() {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    alert("로그인이 필요한 기능입니다.");
    return <Navigate to="/login" />;
  }

  return <Layout />;
}

export default Private;

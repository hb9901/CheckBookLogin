import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const accessToken = localStorage.getItem("accessToken");

  if(!accessToken){
    alert('로그인이 필요한 기능입니다.');
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
}

export default Private;

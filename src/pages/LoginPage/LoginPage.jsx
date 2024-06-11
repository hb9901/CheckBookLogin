import { useState } from "react";
import styled from "styled-components";
import Login from "../../components/Login";
import Register from "../../components/Register";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleClickRegister = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <MainWrapper>
      {isLogin ? (
        <Login handleClickRegister={handleClickRegister} />
      ) : (
        <Register handleClickRegister={handleClickRegister} />
      )}
    </MainWrapper>
  );
}

export default LoginPage;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 8px;
`;

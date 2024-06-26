import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUser from "../../hooks/useUser";

function Login() {
  const navigate = useNavigate();
  const { logIn, setLogIn } = useUser();
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClickLogIn = async () => {
    try {
      const id = idRef.current.value;
      const password = passwordRef.current.value;
      const data = { id, password };

      const { accessToken } = await logIn(data);

      setLogIn(accessToken);
      alert("로그인 성공!");
      navigate("/home");
    } catch (e) {
      alert(e || "로그인 실패");
    }
  };

  const handleClickRegister = () => {
    navigate("/signUp");
  };
  return (
    <>
      <Title>로그인</Title>
      <InputForm>
        <InputLabel>아이디</InputLabel>
        <Input type="text" ref={idRef} placeholder="아이디" />
      </InputForm>
      <InputForm>
        <InputLabel>비밀번호</InputLabel>
        <Input type="password" ref={passwordRef} placeholder="비밀번호" />
      </InputForm>
      <Btn onClick={handleClickLogIn} $color="#a0a0a0">
        로그인
      </Btn>
      <Btn onClick={handleClickRegister} $color="#6C757D">
        회원가입
      </Btn>
    </>
  );
}

export default Login;

const Title = styled.h2``;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
`;

const Btn = styled.button`
  width: 100%;
  padding: 10px;

  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: ${({ $color }) => $color};
`;

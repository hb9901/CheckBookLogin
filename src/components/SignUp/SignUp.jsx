import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";

function SignUp() {
  const navigate = useNavigate();
  const { mutateAsync: signUp } = useMutation({
    mutationFn: (data) => api.user.signUp(data),
  });
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);

  const handleClickRegister = async () => {
    try {
      const id = idRef.current.value;
      const password = passwordRef.current.value;
      const nickname = nicknameRef.current.value;
      const data = { id, password, nickname };

      await signUp(data);
      alert("회원가입을 축하합니다!");
      navigate("/login");
    } catch {
      alert("회원가입 실패");
    }
  };

  const handleClickLogin = async () => {
    navigate("/login");
  };

  return (
    <>
      <Title>회원가입</Title>
      <InputForm>
        <InputLabel>아이디</InputLabel>
        <Input type="text" ref={idRef} placeholder="아이디" />
      </InputForm>
      <InputForm>
        <InputLabel>비밀번호</InputLabel>
        <Input type="password" ref={passwordRef} placeholder="비밀번호" />
      </InputForm>
      <InputForm>
        <InputLabel>닉네임</InputLabel>
        <Input type="text" ref={nicknameRef} placeholder="닉네임" />
      </InputForm>
      <Btn onClick={handleClickRegister} $color="#a0a0a0">회원가입</Btn>
      <Btn onClick={handleClickLogin} $color="#6C757D">
        로그인
      </Btn>
    </>
  );
}

export default SignUp;

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

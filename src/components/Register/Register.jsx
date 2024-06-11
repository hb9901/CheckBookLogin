import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Register() {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/login");
  };
  return (
    <>
      <Title>회원가입</Title>
      <InputForm>
        <InputLabel>아이디</InputLabel>
        <Input placeholder="아이디" />
      </InputForm>
      <InputForm>
        <InputLabel>비밀번호</InputLabel>
        <Input placeholder="비밀번호" />
      </InputForm>
      <InputForm>
        <InputLabel>닉네임</InputLabel>
        <Input placeholder="닉네임" />
      </InputForm>
      <Btn $color="#a0a0a0">회원가입</Btn>
      <Btn onClick={handleClickRegister} $color="#6C757D">
        로그인
      </Btn>
    </>
  );
}

export default Register;

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

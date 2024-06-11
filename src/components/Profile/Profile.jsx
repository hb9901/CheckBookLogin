import styled from "styled-components";

function Profile() {
  return (
    <Wrapper>
      <Title>프로필 수정</Title>
      <InputForm>
        <InputLabel>닉네임</InputLabel>
        <Input />
      </InputForm>
      <InputForm>
        <InputLabel>아바타 이미지</InputLabel>
        <Input />
      </InputForm>
      <Btn>프로필 업데이트</Btn>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
`;

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

  border: none;
  border-radius: 4px;

  background-color: rgb(0, 123, 255);
  color: white;

  cursor: pointer;

  &:hover {
    background-color: rgb(0, 38, 255);
  }
`;

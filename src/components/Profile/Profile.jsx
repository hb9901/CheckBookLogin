import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";

function Profile() {
  const { nickname, avatar } = useLoaderData();
  const nicknameRef = useRef();
  const [imgFile, setImgFile] = useState(avatar);
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserInfo } = useMutation({
    mutationFn: (formData) => api.user.updateUserInfo(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["expenditures"]);
    },
  });

  const handleFileChange = ({ target }) => {
    const [file] = target.files;
    if (!file) return;

    setImgFile(file);
  };

  const handleUpdateClick = async () => {
    const formData = new FormData();
    formData.append("nickname", nicknameRef.current.value);
    formData.append("avatar", imgFile);

    await updateUserInfo(formData);
  };

  return (
    <Wrapper>
      <Title>프로필 수정</Title>
      <InputForm>
        <InputLabel>닉네임</InputLabel>
        <Input ref={nicknameRef} defaultValue={nickname && nickname} />
      </InputForm>
      <InputForm>
        <InputLabel>아바타 이미지</InputLabel>
        <Input onChange={handleFileChange} type="file" accept="image/*" />
        <ImgSection></ImgSection>
      </InputForm>
      <Btn onClick={handleUpdateClick}>프로필 업데이트</Btn>
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

const ImgSection = styled.section`
  display: flex;
  justify-content: center;
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

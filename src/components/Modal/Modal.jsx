import styled from "styled-components";
import { useModal } from "../../context/modal.context";
import Backdrop from "./Backdrop";

function Modal({ content, handleClickModalDelete }) {
  const modal = useModal();

  const handleCancleClick = () => {
    modal.close();
  };

  return (
    <Backdrop>
      <ModalWrapper>
        <ImgWrapper>
          <img src="public/warningSign.png" />
        </ImgWrapper>
        <Content>{content}</Content>
        <BtnWrapper>
          <OkBtn onClick={handleClickModalDelete}>OK</OkBtn>
          <CancleBtn onClick={handleCancleClick}>Cancle</CancleBtn>
        </BtnWrapper>
      </ModalWrapper>
    </Backdrop>
  );
}

export default Modal;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  gap: 50px;
  background-color: white;
`;

const ImgWrapper = styled.div`
  width: 60px;
  height: 50px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  font-weight: bold;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const CancleBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: rgb(108, 117, 125);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
  &:hover {
    background-color: rgb(55, 61, 66);
  }
`;
const OkBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: rgb(255, 77, 77);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
  &:hover {
    background-color: rgb(175, 36, 36);
  }
`;

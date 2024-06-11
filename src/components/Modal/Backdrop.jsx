import styled from "styled-components";
import { useModal } from "../../context/modal.context";

function Backdrop({ children }) {
  const modal = useModal();

  const handleBackGroundClick = (e) => {
    if (e.currentTarget === e.target) modal.close();
  };

  return <Background onClick={handleBackGroundClick}>{children}</Background>;
}

export default Backdrop;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

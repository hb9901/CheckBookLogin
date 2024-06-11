import styled from "styled-components";
import Register from "../../components/Register";

function RegisterPage() {
  return (
    <MainWrapper>
      <Register />
    </MainWrapper>
  );
}

export default RegisterPage;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 8px;
`;

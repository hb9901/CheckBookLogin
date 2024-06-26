import styled from "styled-components";
import Login from "../../components/Login";

function LoginPage() {
  return (
    <MainWrapper>
      <Login />
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

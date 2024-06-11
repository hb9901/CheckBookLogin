import styled from "styled-components";

import SignUp from "../../components/SignUp";

function SignUpPage() {
  return (
    <MainWrapper>
      <SignUp />
    </MainWrapper>
  );
}

export default SignUpPage;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 8px;
`;

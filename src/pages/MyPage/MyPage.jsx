import styled from "styled-components";
import Profile from "../../components/Profile";

function MyPage() {
  return (
    <MainWrapper>
      <Profile />
    </MainWrapper>
  );
}

export default MyPage;

const MainWrapper = styled.main`
  max-width: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 20px;
  margin: 0px auto;
  padding-top: 2rem;
`;

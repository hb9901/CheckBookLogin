import { Link, useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUser from "../../../hooks/useUser";

function Header() {
  const navigate = useNavigate();
  const initUserData = useLoaderData();
  const { userInfo, isAuthenticated, logOut } = useUser(true, initUserData);
  const avatar = userInfo && userInfo.avatar;
  const nickname = userInfo && userInfo.nickname;
  const accessToken = localStorage.getItem("accessToken");

  const handleOnLoginClick = () => {
    if (accessToken && isAuthenticated) logOut();
    navigate("/login");
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to={"/"}>Home</Link>
        <Link to={"/mypage"}>내 프로필</Link>
      </HeaderLeft>
      <HeaderRight>
        <UserInfo>
          <UserImg>{isAuthenticated && <img src={avatar} />}</UserImg>
          <UserNickName>{isAuthenticated && nickname}</UserNickName>
        </UserInfo>
        <LoginBtn onClick={handleOnLoginClick}>
          {isAuthenticated ? "로그아웃" : "로그인"}
        </LoginBtn>
      </HeaderRight>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;

  padding: 20px 20px;
  justify-content: space-between;
  background-color: #333333;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > a {
    all: unset;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

const UserImg = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 70%;
  overflow: hidden;

  & > img {
    width: 100%;

    object-fit: cover;
  }
`;

const UserNickName = styled.div`
  color: white;
`;

const LoginBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #aa2929;
  }
`;

export default Header;

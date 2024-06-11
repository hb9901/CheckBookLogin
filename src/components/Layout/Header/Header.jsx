import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../context/auth.context";

function Header() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const nickname = data && data.nickname;
  const { isAuthenticated, logOut } = useContext(AuthContext);

  const handleOnLoginClick = () => {
    isAuthenticated ? logOut() : navigate("/login");
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to={"/"}>Home</Link>
        <Link to={"/mypage"}>내 프로필</Link>
      </HeaderLeft>
      <HeaderRight>
        <UserInfo>
          <UserImg />
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
  gap: 10px;
`;

const UserInfo = styled.div`
  display: flex;
`;

const UserImg = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 10px;

  & > img {
    object-fit: cover;
  }
`;

const UserNickName = styled.div`
  color: white;
`;

const LoginBtn = styled.button`
  height: 30px;
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

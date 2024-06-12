import api from "../api/api";

async function userInfoLoader() {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  const { id, nickname, avatar, success } = await api.user.getUserInfo();
  if (success) return { id, nickname, avatar };

  return null;
}

export default userInfoLoader;

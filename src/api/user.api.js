import { AxiosError } from "axios";
import useUserStore from "../zustand/user.store";

class UserAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(data) {
    try {
      const path = "/register";
      const response = await this.#axios.post(path, data);
      const responseData = response.data;

      return responseData;
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.response?.data.message || e.message);
        throw new Error(e.response?.data.message || e.message);
      }
      throw new Error("An unexpected error occured");
    }
  }

  async logIn(data) {
    try {
      const path = "/login?expiresIn=30m";
      const response = await this.#axios.post(path, data);
      const responseData = response.data;

      return responseData;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message || e.message);
      }
      throw new Error("An unexpected error occured");
    }
  }

  async getUserInfo() {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const path = "/user";
      const response = await this.#axios.get(path, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const responseData = response.data;

      return responseData;
    } catch (err) {
      alert("userInfo:AccessToken이 만료되었습니다!");
      localStorage.clear();
      useUserStore.getState().setLogOut();
    }
  }

  async updateUserInfo(formData) {
    const accessToken = localStorage.getItem("accessToken");
    console.log(formData);
    try {
      const path = "/profile";
      const response = await this.#axios.patch(path, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const responseData = response.data;

      return responseData;
    } catch (err) {
      if (!accessToken) {
        alert("AccessToken이 만료되었습니다!");
        localStorage.clear();
      }
      else{
        alert(err.response?.message);
      }
    }
  }
}

export default UserAPI;

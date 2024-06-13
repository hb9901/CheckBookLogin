import { AxiosError } from "axios";

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
      const path = "/login?expiresIn=10s";
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
    }
  }

  async updateUserInfo(formData) {
    const accessToken = localStorage.getItem("accessToken");
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
      alert("AccessToken이 만료되었습니다!");
      localStorage.clear();
    }
  }
}

export default UserAPI;

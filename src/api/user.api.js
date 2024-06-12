class UserAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(data) {
    const path = "/register";
    const response = await this.#axios.post(path, data);
    const responseData = response.data;

    return responseData;
  }

  async logIn(data) {
    const path = "/login";
    const response = await this.#axios.post(path, data);
    const responseData = response.data;

    return responseData;
  }

  async getUserInfo() {
    const accessToken = localStorage.getItem("accessToken");
    const path = "/user";
    const response = await this.#axios.get(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const responseData = response.data;

    return responseData;
  }

  async updateUserInfo(formData) {
    const accessToken = localStorage.getItem("accessToken");
    const path = "/profile";
    const response = await this.#axios.patch(path, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const responseData = response.data;

    return responseData;
  }
}

export default UserAPI;

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
}

export default UserAPI;

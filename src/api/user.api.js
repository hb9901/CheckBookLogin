class UserAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(data) {
    const path = "/register";
    const response = await this.#axios.post(path, data);
    const result = response.data.resuslt;

    return result;
  }

  async logIn(data) {
    const path = "/login";
    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result
  }
}

export default UserAPI;

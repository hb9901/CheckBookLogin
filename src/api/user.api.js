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

  async getUserInfo(token){
    const path = "/user";
    const response = await this.#axios.get(path, {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    })
    const responseData = response.data;

    return responseData;
  } 

  async update(data){
    const path = "/profile";
    const response = await this.#axios.post(path, data);
    const responseData = response.data;

    return responseData;
  }
}

export default UserAPI;

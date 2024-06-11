class ExpendituresAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async getExpenditures() {
    const path = "/expenses";
    const response = await this.#axios.get(path);
    const responseData = response.data;

    return responseData;
  }
}

export default ExpendituresAPI;

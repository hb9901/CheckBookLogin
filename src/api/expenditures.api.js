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

  async addExpenditure(expenditure) {
    const path = "/expenses";
    const response = await this.#axios.post(path, expenditure);
    const responseData = response.data;

    return responseData;
  }
}

export default ExpendituresAPI;

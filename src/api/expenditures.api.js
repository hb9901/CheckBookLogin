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

  async updateExpenditure({ expenditureId, expenditure }) {
    const path = `/expenses/${expenditureId}`;
    const response = await this.#axios.patch(path, expenditure);
    const responseData = response.data;

    return responseData;
  }

  async deleteExpenditure(expenditureId) {
    const path = `/expenses/${expenditureId}`;
    const response = await this.#axios.delete(path);

    console.log(response);
  }
}

export default ExpendituresAPI;

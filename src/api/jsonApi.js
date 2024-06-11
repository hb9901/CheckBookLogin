import axios from "axios";
import ExpendituresAPI from "./expenditures.api";

const BASE_URL = "http://localhost:5000/";

class jsonAPI {
  #axios;

  expenditures;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL });

    this.expenditures = new ExpendituresAPI(this.#axios);
  }
}

const jsonApi = new jsonAPI();

export default jsonApi;

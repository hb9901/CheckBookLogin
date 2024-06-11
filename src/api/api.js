import axios from "axios";
import UserAPI from "./user.api";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #axios;

  user;
  expenditures;

  constructor() {
    this.#axios = axios.create({ baseURL: BASE_URL });

    this.user = new UserAPI(this.#axios);
  }
}

const api = new API();

export default api;

import axios from "axios";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #baseURL = BASE_URL;
  #client;

  user;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
  }
}

const api = new API();

export default api;

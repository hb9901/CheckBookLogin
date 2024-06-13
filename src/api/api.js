import axios from "axios";
import ExpenditureAPI from "./expenditures.api";
import UserAPI from "./user.api";

const USER_BASE_URL = "https://moneyfulpublicpolicy.co.kr";
const EXPENDITURE_BASE_USER = "https://pickled-repeated-daisy.glitch.me";

class API {
  #userAxios;
  #expenditureAxios;

  user;
  expenditure;

  constructor() {
    this.#userAxios = axios.create({ baseURL: USER_BASE_URL });
    this.#expenditureAxios = axios.create({ baseURL: EXPENDITURE_BASE_USER });

    this.user = new UserAPI(this.#userAxios);
    this.expenditure = new ExpenditureAPI(this.#expenditureAxios) 
  }
}

const api = new API();

export default api;

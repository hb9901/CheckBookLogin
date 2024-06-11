import axios from "axios";

class UserAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async registerUser(id, pw, nickname) {
    const response = await axios.post("/register", id, pw, nickname);
    const data = response.data;
    console.log(data);
    // if(data.success){ 
    //   alert("회원가입을 축하합니다!");

    // }
  }
}

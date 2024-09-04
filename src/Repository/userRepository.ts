import axios from "axios";
//import UserValidation from "../services/validations/userValidations";

class UserRepository {
  private urlIdentity;

  //private userValidation = new UserValidation();

  constructor() {
    this.urlIdentity = `https://apolo-api.onrender.com/user/find-identity/`;
  }

  async findIdentity(id: string) {
    try {
      const response = await axios.post(`${this.urlIdentity}` + `${id}`);

      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error);
        throw error;
      }
    }
  }
}

export default UserRepository;

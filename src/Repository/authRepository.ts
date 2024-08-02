import axios from "axios";
import authValidation from "../services/validations/authValidation";

class AuthRepository {
  private urlSignIn;
  private urlSignUp;

  private authValidation = new authValidation();

  constructor() {
    this.urlSignIn = "https://apolo-api.onrender.com/auth/signin";
    this.urlSignUp = "https://apolo-api.onrender.com/auth/signup";
  }

  async login(email: string, password: string) {
    try {
      await this.authValidation.validateLogin({ email, password });

      const res = await axios.post(this.urlSignIn, {
        email,
        password,
      });

      if (res.data.items[0].user.validation.email) {
        return res;
      }

      if (!res.data.items[0].user.validation.email) {
        return false;
      }

      return null;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error);
        throw error;
      }
    }
  }

  async register(
    name: string,
    surname: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
  ) {
    try {
      await this.authValidation.validateRegister({
        name,
        surname,
        email,
        phone,
        password,
        confirmPassword,
      });
      await axios.post(this.urlSignUp, {
        name,
        surname,
        email,
        phone,
        password,
        confirmPassword,
      });

      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error);
        throw error;
      }
    }
  }
}

export default AuthRepository;

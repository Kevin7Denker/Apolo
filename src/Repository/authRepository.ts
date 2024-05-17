import axios from "axios";
import authValidation from "../services/validations/authValidation";

class AuthRepository {
  authValidation = new authValidation();

  async login(email: string, password: string) {
    try {
      await this.authValidation.validateLogin({ email, password });
      const data = await axios.post(
        "https://apolo-api.onrender.com/auth/signin",
        {
          email,
          password,
        }
      );

      return data;
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
      const data = await axios.post(
        "https://apolo-api.onrender.com/auth/signup",
        {
          name,
          surname,
          email,
          phone,
          password,
          confirmPassword,
        }
      );

      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error);
        throw error;
      }
    }
  }
}

export default AuthRepository;

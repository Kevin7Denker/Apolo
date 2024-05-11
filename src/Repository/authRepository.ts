import authValidation from "../services/validations/authValidation";

class AuthRepository {
  authValidation = new authValidation();

  async login(email: string, password: string) {
    const data = await this.authValidation.validateLogin({ email, password });
    return data;
  }

  async register(
    name: string,
    surname: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
  ) {
    const data = await this.authValidation.validateRegister({
      name,
      surname,
      email,
      phone,
      password,
      confirmPassword,
    });
    return data;
  }
}

export default AuthRepository;

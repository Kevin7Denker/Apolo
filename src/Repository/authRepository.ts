import axios from "axios";
import authValidation from "../services/validations/authValidation";
import { COMPLETE_WELCOME, RESEND_EMAIL, SIGNIN, SIGNUP } from "../Urls";
import { GetUser } from "../Hooks/Providers/AuthProvider";

class AuthRepository {
  private urlSignIn;
  private urlSignUp;
  private urlCompleteWelcome;
  private urlResendEmail;

  private authValidation = new authValidation();

  constructor() {
    this.urlSignIn = SIGNIN;
    this.urlSignUp = SIGNUP;
    this.urlCompleteWelcome = COMPLETE_WELCOME;
    this.urlResendEmail = RESEND_EMAIL;
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

  async completeWelcome(
    image: File | null,
    genres: string[] | null,
    country: string | null,
    code: string | null,
    identity: string | null
  ) {
    const user = GetUser();
    const email = user.profile.email;

    const res = await axios.post(this.urlCompleteWelcome, {
      email,
      image,
      genres,
      country,
      code,
      identity,
    });

    return res;
  }

  async resendEmail(token: string) {
    try {
      const res = await axios.post(this.urlResendEmail, {
        token,
      });

      return res;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error);
        throw error;
      }
    }
  }
}

export default AuthRepository;

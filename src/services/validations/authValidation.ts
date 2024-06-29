import { z, ZodError } from "zod";

class AuthValidation {
  async validateLogin(data: { email: string; password: string }) {
    try {
      const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
      });

      return console.log(schema.parse(data));
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((err) => err.message);
        console.log("Validation Error:", errorMessages);
        return { error: true, messages: errorMessages };
      }
      console.error("Error:", error);
      throw error;
    }
  }

  async validateRegister(data: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    nationality: string;
  }) {
    const schema = z.object({
      name: z.string(),
      surname: z.string(),
      email: z.string().email(),
      phone: z.string(),
      password: z.string().min(6),
      confirmPassword: z.string(),
      nationality: z.string(),
    });

    try {
      const validatedData = schema.parse(data);
      return validatedData;
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((err) => err.message);
        console.log("Validation Error:", errorMessages);
        return { error: true, messages: errorMessages };
      }

      console.error("Error:", error);
      throw error;
    }
  }
}

export default AuthValidation;

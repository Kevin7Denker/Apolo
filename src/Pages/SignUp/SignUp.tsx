import { Link, useNavigate } from "react-router-dom";
import BackgroundHome from "../../Components/backgroundHome";

import {
  Container,
  Content,
  IntroTexts,
  IntroTitle,
  IntroSubtitle,
  Submit,
  Form,
  MainRegisterText,
  SubRegisterText,
  SubText,
  RegisterContainer,
  Input,
  Label,
  InputContent,
} from "./Styles/Index";
import { InputContainer } from "../SignIn/Styles/Index";
import AuthRepository from "../../Repository/authRepository";
import { useState } from "react";
import { ErrorMessage, SuccessMessage } from "../../Styles/Styles";

const SignUp = () => {
  const navigate = useNavigate();
  const authrepository = new AuthRepository();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await authrepository.register(
        name,
        surname,
        email,
        phone,
        password,
        confirmPassword
      );

      if (res) {
        console.log(res);
        setSuccessMessage("User created successfully");

        resetForm();

        setTimeout(() => {
          navigate("/");
        }, 2500);
      }
    } catch (error) {
      setErrorMessage("Error creating user");
    }
  }

  function resetForm() {
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <BackgroundHome />
      <Content>
        <Container>
          <IntroTexts>
            <IntroTitle>Sign Up</IntroTitle>
            <IntroSubtitle>
              Enter your details below to create your account and get started.
            </IntroSubtitle>
          </IntroTexts>
          <Form onSubmit={handleSubmit}>
            <InputContent>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Label>Name</Label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Surname"
                  required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <Label>Surname</Label>
              </InputContainer>
            </InputContent>
            <InputContent>
              <InputContainer>
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Email</Label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Label>Phone</Label>
              </InputContainer>
            </InputContent>

            <InputContent>
              <InputContainer>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Label>Password</Label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Label>Confirm Password</Label>
              </InputContainer>
            </InputContent>
            <Submit>Confirm</Submit>
          </Form>

          <RegisterContainer>
            <MainRegisterText>Already have an account ?</MainRegisterText>
            <SubRegisterText>
              <Link to="/">
                <SubText>Sign In!</SubText>
              </Link>
            </SubRegisterText>
          </RegisterContainer>
        </Container>
      </Content>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </>
  );
};

export default SignUp;

import { useState } from "react";
import BackgroundHome from "../../Components/backgroundHome";
import {
  Button,
  Container,
  Content,
  Credits,
  Forgot,
  Form,
  Input,
  InputContainer,
  Label,
  MainRegisterText,
  MainTexts,
  Options,
  RegisterContainer,
  SubRegisterText,
  SubText,
  Subtitle,
  Title,
} from "./Styles/Index";
import { Link, useNavigate } from "react-router-dom";
import AuthRepository from "../../Repository/authRepository";

import { handleResponse } from "../../Utils/Auth/SignInUtils";
import { useAuth } from "../../Hooks/useAuth";

const SignIn = () => {
  const authrepository = new AuthRepository();

  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await authrepository.login(email, password);
      if (res) {
        handleResponse(res, dispatch, navigate);
      }
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <BackgroundHome />
      <Content>
        <Container>
          <MainTexts>
            <Title>Welcome</Title>
            <Subtitle>to Apolo</Subtitle>
          </MainTexts>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label>Email</Label>
            </InputContainer>
            <InputContainer>
              <Input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Label>Password</Label>
              <Forgot>
                <Link to="/*">Forgot password?</Link>
              </Forgot>
            </InputContainer>
            <Button type="submit">Join</Button>
            <RegisterContainer>
              <MainRegisterText>Don't have an account ?</MainRegisterText>
              <SubRegisterText>
                <Link to="/signup">
                  <SubText>Sign Up!</SubText>
                </Link>
              </SubRegisterText>
            </RegisterContainer>
          </Form>
        </Container>
        <Options>
          <p>A</p>
          <p>B</p>
          <p>C</p>
        </Options>
        <Credits>
          <p>Copyright © 2024 Kevin Denker. All rights reserved.</p>
        </Credits>
      </Content>
    </>
  );
};

export default SignIn;

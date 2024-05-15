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
import { Link } from "react-router-dom";
import AuthRepository from "../../Repository/authRepository";

const Home = () => {
  const authrepository = new AuthRepository();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = authrepository.login(email, password);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
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
                id="email"
                placeholder="Email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label htmlFor="email">Email</Label>
            </InputContainer>
            <InputContainer>
              <Input
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Label htmlFor="password">Password</Label>
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
          <p>Copyright © 2024 Kevin Denker. All rights reserved .</p>
        </Credits>
      </Content>
    </>
  );
};

export default Home;

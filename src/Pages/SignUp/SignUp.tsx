import { Link } from "react-router-dom";
import BackgroundHome from "../../Components/backgroundHome";
import UserProfile from "../../Utils/UserProfile";
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
import { InputContainer } from "../Welcome/Styles/Index";

const SignUp = () => {
  const profile = UserProfile();

  console.log(profile);
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
          <Form>
            <InputContent>
              <InputContainer>
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <Label>Name</Label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
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
                />
                <Label>Phone</Label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                />
                <Label>Nationality</Label>
              </InputContainer>
            </InputContent>
            <InputContent>
              <InputContainer>
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <Label>Password</Label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                />
                <Label>Confirm Password</Label>
              </InputContainer>
            </InputContent>
            <Submit>Confirm</Submit>
          </Form>

          <RegisterContainer>
            <MainRegisterText>Already have an account?</MainRegisterText>
            <SubRegisterText>
              <Link to="/welcome">
                <SubText>Sign In!</SubText>
              </Link>
            </SubRegisterText>
          </RegisterContainer>
        </Container>
      </Content>
    </>
  );
};

export default SignUp;

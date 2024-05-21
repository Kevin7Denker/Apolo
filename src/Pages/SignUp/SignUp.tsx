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
import CountryDropdown from "../../Components/dropDownCountries";

const SignUp = () => {
  const profile = UserProfile();

  console.log(profile);
  function handleCountryChange(): void {
    throw new Error("Function not implemented.");
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
          <Form>
            <InputContent>
              <InputContainer>
                <Input type="text" placeholder="Name" required />
                <Label>Name</Label>
              </InputContainer>
              <InputContainer>
                <Input type="text" placeholder="Surname" required />
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
                <Label>Email</Label>
              </InputContainer>
              <InputContainer>
                <Input type="tel" placeholder="Phone" required />
                <Label>Phone</Label>
              </InputContainer>
            </InputContent>
            <InputContent>
              <InputContainer>
                <CountryDropdown
                  label="Select your country"
                  name="country"
                  onChange={handleCountryChange}
                />
              </InputContainer>
              <InputContainer />
            </InputContent>
            <InputContent>
              <InputContainer>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
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

import { useState } from "react";
import { countries } from "../../Utils/Data/Countries";
import BackgroundHome from "../../Components/backgroundHome";
import {
  Content,
  ModalContent,
  ListStyle,
  Modal,
  Submit,
  Subtitle,
  Title,
  Text,
  Input,
  InputContent,
  InputContainer,
  Label,
  WelcomeSubmits,
} from "./Styles/Index";

const Welcome = () => {
  const [modalStep, setModalStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    setModalStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setModalStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    alert(`Selected Item: ${selectedItem}\nInput Value: ${inputValue}`);
    setModalStep(1);
    setSelectedItem(null);
    setInputValue("");
  };

  return (
    <>
      <BackgroundHome />
      <Content>
        <Modal>
          {modalStep === 1 && (
            <ModalContent>
              <Title>Hey👋</Title>
              <Subtitle>Welcome to Apolo!</Subtitle>
              <Text>
                Hello, my name is Kevin Denker, developer and creator of the
                Apolo platform. Thank you for participating in the open beta of
                Apolo. This project is still in the development phase, so if you
                encounter any bugs or have suggestions for improvements, please
                contact me. Welcome to Apolo, and enjoy the platform to the
                fullest!
              </Text>
              <Submit onClick={handleNext}>Next</Submit>
            </ModalContent>
          )}

          {modalStep === 2 && (
            <ModalContent>
              <h2>Select a Country</h2>
              <ListStyle>
                <ul>
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => handleSelect(country.name)}
                      className={
                        selectedItem === country.name ? "selected" : ""
                      }
                    >
                      {country.name}
                    </li>
                  ))}
                </ul>
              </ListStyle>
              <Submit onClick={handleNext} disabled={!selectedItem}>
                Next
              </Submit>
            </ModalContent>
          )}

          {modalStep === 3 && (
            <ModalContent>
              <Title>Select your ID</Title>
              <InputContent>
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Label>@example</Label>
                </InputContainer>
              </InputContent>
              <WelcomeSubmits>
                <Submit onClick={handleBack}>Back</Submit>
                <Submit onClick={handleNext} disabled={!inputValue}>
                  Next
                </Submit>
              </WelcomeSubmits>
            </ModalContent>
          )}

          {modalStep === 4 && (
            <div>
              <h2>Review Information</h2>
              <p>Selected Country: {selectedItem}</p>
              <p>Input Value: {inputValue}</p>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          )}

          {modalStep === 5 && (
            <div>
              <h2>Submit</h2>
              <p>Are you ready to submit the information?</p>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </Modal>
      </Content>
    </>
  );
};

export default Welcome;

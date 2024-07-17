import { useState } from "react";
import { countries } from "../../Utils/Data/Countries";
import BackgroundHome from "../../Components/backgroundHome";
import { Content, ListStyle, Modal, Submit } from "./Styles/Index";

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
            <>
              <h1>Hey👋</h1>
              <h2>Welcome to Apolo!</h2>
              <Submit onClick={handleNext}>Next</Submit>
            </>
          )}

          {modalStep === 2 && (
            <>
              <h2>Select a Country</h2>
              <ListStyle>
                <ul>
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => handleSelect(country.name)}
                    >
                      {country.name}
                    </li>
                  ))}
                </ul>
              </ListStyle>
              {selectedItem && <Submit onClick={handleNext}>Next</Submit>}
            </>
          )}

          {modalStep === 3 && (
            <div>
              <h2>Input Details</h2>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
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

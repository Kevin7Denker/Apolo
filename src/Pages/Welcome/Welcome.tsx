import React, { useState } from "react";

import BackgroundHome from "../../Components/backgroundHome";
import Step5 from "../../Components/WelcomeComponents/StepFive";
import Step4 from "../../Components/WelcomeComponents/StepFour";
import Step1 from "../../Components/WelcomeComponents/StepOne";
import Step3 from "../../Components/WelcomeComponents/StepThree";
import Step2 from "../../Components/WelcomeComponents/StepTwo";
import Step6 from "../../Components/WelcomeComponents/StepSix";

import { Content, Modal, ModalContent } from "./Styles/Index";

const Welcome: React.FC = () => {
  const [modalStep, setModalStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [identity, setIdentity] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const handleNext = () => {
    setModalStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setModalStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    alert(`Selected Item: ${selectedItem}\nInput Value: ${identity}`);
    setModalStep(1);
    setSelectedItem(null);
    setIdentity("");
    setSelectedGenres([]);
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <BackgroundHome />
      <Content>
        <Modal>
          {modalStep === 1 && <Step1 onNext={handleNext} />}
          {modalStep === 2 && (
            <Step2
              selectedItem={selectedItem}
              onSelect={handleSelect}
              onNext={handleNext}
            />
          )}
          {modalStep === 3 && (
            <Step3
              identity={identity}
              onIdentityChange={(e) => setIdentity(e.target.value)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {modalStep === 4 && (
            <Step4
              selectedGenres={selectedGenres}
              onGenreSelect={handleGenreSelect}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {modalStep === 5 && (
            <Step5
              selectedItem={selectedItem}
              identity={identity}
              selectedGenres={selectedGenres}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}
          {modalStep === 6 && (
            <Step6
              onImageChange={handleImageChange}
              imagePreview={imagePreview}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}
        </Modal>
      </Content>
    </>
  );
};

export default Welcome;

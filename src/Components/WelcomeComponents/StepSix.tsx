import React from "react";
import { Submit, WelcomeSubmits, Text, Subtitle, ModalContent } from "./Styles";

interface Step5Props {
  selectedItem: string | null;
  identity: string;
  selectedGenres: string[];
  onBack: () => void;
  onNext: () => void;
}

const Step5: React.FC<Step5Props> = ({
  selectedItem,
  identity,
  selectedGenres,
  onBack,
  onNext,
}) => (
  <ModalContent>
    <Subtitle>Review Information</Subtitle>
    <Text>Selected Country: {selectedItem}</Text>
    <Text>Input Value: {identity}</Text>
    <Text>Selected Genres: {selectedGenres.join(", ")}</Text>
    <WelcomeSubmits>
      <Submit onClick={onBack}>Back</Submit>
      <Submit onClick={onNext}>Next</Submit>
    </WelcomeSubmits>
  </ModalContent>
);

export default Step5;
